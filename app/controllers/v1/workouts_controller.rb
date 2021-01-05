class V1::WorkoutsController < ApplicationController
    def index
        @workouts = Workout.all_workouts(current_user.id)

        render json: @workouts, status: :ok
    end

    def create
        @workout = Workout.new(workout_params)

        if @workout.save
            render json: @workout, status: :created
        else
            render json: @workout.errors, status: :unprocessable_entity
        end
    end

    private

    def workout_params
        params.require(:workout).permit(:workout_name, :user_id, :category_id)
    end
end
