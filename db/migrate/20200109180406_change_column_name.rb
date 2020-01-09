class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :interviews, :type, :interview_type
  end
end
