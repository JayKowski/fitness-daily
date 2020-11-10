class V1::RepsController < ApplicationController
    def index
        @reps = Rep.all 

        render json: @reps, status: :ok
    end

    def create
        @rep = Rep.new(rep_params)

        if @rep.save
            render json: @rep, status: :created
        else
            render json: @rep.errors, status: :unprocessable_entity
        end
    end

    private

    def rep_params
        params.require(:rep).permit(:workout_id, :rep_count)
    end
end
