class CreateUsersStatsJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :users, :stats do |t|
      t.index [:user_id, :stat_id]
      t.index [:stat_id, :user_id]
    end
  end
end
