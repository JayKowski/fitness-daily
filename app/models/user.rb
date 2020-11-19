class User < ApplicationRecord
    has_secure_password
    
    has_many :workouts, dependent: :destroy
    has_and_belongs_to_many :stats
end
