class V1::CategoriesController < ApplicationController
    # before_action :authorized

    def index
        @categories = Category.shortened_categs(current_user.id)

        render json: @categories, status: :ok
    end

    def create
        @category = Category.new(categs_params)

        if @category.save
            render json: @category, status: :created
        else
            render json: @category.errors, status: :unprocessable_entity
        end
    end

    private

    def categs_params
        params.require(:category).permit(:category_name)
    end
end
