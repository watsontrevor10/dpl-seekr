class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.date :due_date
      t.date :completed_date
      t.string :subject
      t.belongs_to :job, null: false, foreign_key: true

      t.timestamps
    end
  end
end
