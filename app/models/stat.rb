class Stat < ApplicationRecord
    has_andBelongs_to_many :users
end
