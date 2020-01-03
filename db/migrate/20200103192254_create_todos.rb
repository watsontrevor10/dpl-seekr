class CreateTodos < ActiveRecord::Migration[6.0]
  def change
    create_table :todos do |t|
      t.date :due_date
      t.date :completed_date
      t.string :subject
      t.text :notes
      t.belongs_to :interview, null: false, foreign_key: true

      t.timestamps
    end
  end
end
