class CreateReps < ActiveRecord::Migration[5.2]
  def change
    create_table :reps do |t|
      t.references :workout, foreign_key: true
      t.string :rep_count, :default => 0

      t.timestamps
    end
  end
end
