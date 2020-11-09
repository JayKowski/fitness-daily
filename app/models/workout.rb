class Workout < ApplicationRecord
  belongs_to :category
  belongs_to :user
  has_many :reps
end
