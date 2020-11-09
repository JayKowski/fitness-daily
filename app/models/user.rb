class User < ApplicationRecord
    has_many :workouts
    has_and_belongs_to_many :stats

end
