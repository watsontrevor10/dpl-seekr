class Job < ApplicationRecord
  belongs_to :user

  has_many :notes, dependent: :destroy
  has_many :tasks, dependent: :destroy
  has_many :interviews, dependent: :destroy
  has_many :contacts, dependent: :destroy

  # function to calculate tasks due within a certain timeframe
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

  def self.total_jobs(id)
    find_by_sql(["
      SELECT status, COUNT(*) as totals
      FROM jobs
      WHERE user_id = ?
      GROUP BY status
      ORDER BY totals
    ", id])
  end

  def self.apps_over_time(id)
    find_by_sql(["
      SELECT date_trunc('week', date_applied::date) AS weekly,
      COUNT(date_applied)           
      FROM jobs
      GROUP BY weekly
      ORDER BY weekly
    ", id])
  end

  # SELECT date_applied, COUNT(*) as totals
  #     FROM jobs 
  #     WHERE 
  #       user_id = ? 
  #       AND status <> 'archived'
  #     GROUP BY date_applied

  private

  def self.archive(id)
    Job.find_by_sql(["
      UPDATE jobs
      SET status = 'Archived'
      WHERE user_id = ?
        AND DATE_PART('day', CURRENT_DATE::timestamp - jobs.updated_at::timestamp) >= 90;
      ", id])

  end


end
