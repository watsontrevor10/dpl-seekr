class CreateJobs < ActiveRecord::Migration[6.0]
  def change
    create_table :jobs do |t|
      t.date :date_applied
      t.string :company_name
      t.string :job_title
      t.string :job_url
      t.integer :salary
      t.string :location
      t.text :description
      t.string :status
      t.string :color
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
