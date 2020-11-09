class RemoveRepsFieldFromWorkout < ActiveRecord::Migration[5.2]
  def change
    remove_column :workouts, :reps, :integer
  end
end
