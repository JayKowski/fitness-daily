class Workout < ApplicationRecord
  belongs_to :category
  belongs_to :user
  has_many :reps

  def self.all_workouts(id)
    workouts = []
    Workout.where(user_id: id).each { |w|
        work = Hash.new
        work = {"id" => w.id, "user_id" => w.user_id, "workout_name" => w.workout_name, "category_id" => w.category_id}
        workouts << work
    }
    workouts
  end
end
