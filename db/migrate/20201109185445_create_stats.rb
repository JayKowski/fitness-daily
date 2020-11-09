class CreateStats < ActiveRecord::Migration[5.2]
  def change
    create_table :stats do |t|
      t.string :stat_name
      t.integer :measurement, :default => 0

      t.timestamps
    end
  end
end
