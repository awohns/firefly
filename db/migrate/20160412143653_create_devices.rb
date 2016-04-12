class CreateDevices < ActiveRecord::Migration
  def change
    create_table :devices do |t|
      t.string :type
      t.string :usage
      t.string :serialnumber
      t.text :errors
      t.string :donationdate
      t.string :hospital

      t.timestamps null: false
    end
  end
end
