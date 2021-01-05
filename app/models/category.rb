class Category < ApplicationRecord
    has_many :workouts

    def self.shortened_categs(user)
        categs = []
        Category.all.each { |c|
            cat = Hash.new
            wArr = pack_workouts(c, user)
            cat = {"id" => c.id, "category_name" => c.category_name, "workouts" => wArr}
            categs << cat
        }
        categs
    end
    
    # w.where("user_id = 35 AND category_id = 2")
    
    def self.pack_workouts(categ, id)
        categ_workouts = categ.workouts.where(user_id: id)
        workoutsArr = []
        
        categ_workouts.each { |w|
            work = Hash.new
            work = { "id" => w.id, "workout_name" => w.workout_name }
            workoutsArr << work
        }
        workoutsArr
    end
end
