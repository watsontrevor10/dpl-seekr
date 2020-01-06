class CreateInterviews < ActiveRecord::Migration[6.0]
  def change
    create_table :interviews do |t|
      t.date :date
      t.string :subject
      t.boolean :follow_up
      t.text :description
      t.string :type
      t.belongs_to :job, null: false, foreign_key: true

      t.timestamps
    end
  end
end
