class Job < ApplicationRecord
  belongs_to :user

  has_many :notes, dependent: :destroy
  has_many :tasks, dependent: :destroy
  has_many :interviews, dependent: :destroy
  has_many :contacts, dependent: :destroy

  # calculate tasks due within a certain timeframe for dashboard
  def self.tasks_due(id, filter_date)
    find_by_sql(["
      SELECT due_date, subject, company_name, job_title, status, user_id
      FROM jobs 
      LEFT JOIN tasks ON 
        tasks.job_id = jobs.id 
      WHERE 
        due_date >= CURRENT_DATE 
        AND due_date <= (CURRENT_DATE + interval '? day')
        AND completed_date IS NULL
        AND due_date IS NOT NULL
        AND user_id = ?
      ORDER BY 
        due_date
    ", filter_date.to_i, id ])
  end

  # calculate upcoming interviews within a user-defined timeframe for dashboard
  def self.upcoming_interviews(id, filter_date)
    find_by_sql(["
      SELECT date, subject, follow_up, interviews.description, interview_type, company_name, job_title
      FROM jobs
      LEFT JOIN interviews ON 
        jobs.id = interviews.job_id
      WHERE 
        date >= CURRENT_DATE 
        AND date <= (CURRENT_DATE + interval '? day')
        AND user_id = ?
      ORDER BY date
    ", filter_date.to_i, id])
  end

  # calculate total jobs submitted by status for dashboard
  def self.total_jobs(id)
    find_by_sql(["
      SELECT status, COUNT(*) as totals
      FROM jobs
      WHERE user_id = ? 
        AND status IS NOT NULL
        AND status <> 'Archived'
      GROUP BY status
      ORDER BY 
        CASE status
          WHEN 'Wishlist' THEN 1
          WHEN 'Applied' THEN 2
          WHEN 'Interviewed' THEN 3
          WHEN 'Offer' THEN 4
          WHEN 'Rejected' THEN 5
          ELSE 6
        END
    ", id])
  end

  # calculate applications submitted over a 180-day time frame
  def self.apps_over_time(id)
    find_by_sql(["
      SELECT date_applied AS date,
      COUNT(created_at)           
      FROM jobs
      WHERE status <> 'archived'
        AND date_applied <= CURRENT_DATE AND date_applied >= CURRENT_DATE - 180
      GROUP BY date
      ORDER BY date
    ", id])
  end

  private

  # put jobs in "Archived" status when they have not been updated in at least 90 days
  def self.archive(id)
    Job.find_by_sql(["
      UPDATE jobs
      SET status = 'Archived', 
      color = '#da5740'
      WHERE user_id = ?
        AND DATE_PART('day', CURRENT_DATE::timestamp - jobs.updated_at::timestamp) >= 90;
      ", id])

  end


end
