class AddCompanyAndJobTitleToApplications < ActiveRecord::Migration[6.0]
  def change
    add_column :applications, :company_name, :string
    add_column :applications, :job_title, :string
  end
end
