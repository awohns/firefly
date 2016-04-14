class RemoveErrorsFromDevices < ActiveRecord::Migration
  def change
    remove_column :devices, :errors, :text
  end
end
