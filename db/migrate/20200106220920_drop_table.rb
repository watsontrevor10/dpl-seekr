class DropTable < ActiveRecord::Migration[6.0]
  def change
    drop_table :todos
    drop_table :interviews
    drop_table :applications
  end
end
