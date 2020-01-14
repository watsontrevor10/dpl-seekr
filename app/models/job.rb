class Job < ApplicationRecord
  belongs_to :user

  has_many :notes, dependent: :destroy
  has_many :tasks, dependent: :destroy
  has_many :interviews, dependent: :destroy
  has_many :contacts, dependent: :destroy

  # function to calculate tasks due within a certain timeframe
  def self.tasks_due(id)
    # binding.pry
    find_by_sql(["
      SELECT due_date, subject, company_name, job_title, status, user_id
      FROM jobs 
      LEFT JOIN tasks ON 
        tasks.job_id = jobs.id 
      WHERE due_date <= CURRENT_DATE + interval '7 day' 
        AND completed_date IS NULL
        AND user_id = ?
    ", id])
  end
end
