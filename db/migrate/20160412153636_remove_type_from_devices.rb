class RemoveTypeFromDevices < ActiveRecord::Migration
  def change
    remove_column :devices, :type, :string
  end
end
