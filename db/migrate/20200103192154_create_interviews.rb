class CreateInterviews < ActiveRecord::Migration[6.0]
  def change
    create_table :interviews do |t|
      t.date :date
      t.time :time
      t.boolean :thank_you
      t.boolean :follow_up
      t.text :notes
      t.string :type
      t.belongs_to :application, null: false, foreign_key: true

      t.timestamps
    end
  end
end
