class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.string :workout_name
      t.references :category, foreign_key: true
      t.references :user, foreign_key: true
      t.integer :reps, :default => 0

      t.timestamps
    end
  end
end
