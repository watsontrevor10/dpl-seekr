class Job < ApplicationRecord
  belongs_to :user

  has_many :notes, dependent: :destroy
  has_many :tasks, dependent: :destroy
  has_many :interviews, dependent: :destroy
  has_many :contacts, dependent: :destroy

  def self.tasks_due
    find_by_sql("
      SELECT due_date, subject, company_name, job_title, status 
      FROM jobs 
      LEFT JOIN tasks ON 
        tasks.job_id = jobs.id 
      WHERE due_date <= CURRENT_DATE + interval '7 day' 
        AND completed_date IS NULL
    ")
  end
end
