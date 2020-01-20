class Task < ApplicationRecord
  belongs_to :job

  # def fitler_tasks
  #   find_by_sql(["
  #     SELECT due_date, subject, job_id, completed
  #     FROM tasks
  #     WHERE 
  #       completed IS false
  #       AND due_date IS NOT NULL
  #     ORDER BY 
  #       created_at DESC
  #     "])
    
  # end
end
