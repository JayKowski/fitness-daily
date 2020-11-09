class V1::StatsController < ApplicationController
    
    def index
        @stats = Stat.all

        render json: @stats, status: :ok
    end

    def create
        @stat = Stat.new(stats_params)

        if @stat.save
            render json: @stat, status: :created
        else
            render json: @stat.errors, status: :unprocessable_entity
        end
    end

    private

    def stats_params
        params.require(:stat).permit(:stat_name)
    end

end
