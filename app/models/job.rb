class Job < ApplicationRecord
  belongs_to :user

  has_many :notes, dependent: :destroy
  has_many :tasks, dependent: :destroy
  has_many :interviews, dependent: :destroy
  has_many :contacts, dependent: :destroy

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
