class AddWorkOutDateToReps < ActiveRecord::Migration[5.2]
  def change
    add_column :reps, :workout_date, :datetime
  end
end
