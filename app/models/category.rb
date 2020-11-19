class Category < ApplicationRecord
    has_many :workouts

    def self.shortened_categs
        categs = []
        Category.all.each { |c|
            cat = Hash.new
            cat = {"id" => c.id, "workout_name" => c.category_name}
            categs << cat
        }
        categs
    end
end
