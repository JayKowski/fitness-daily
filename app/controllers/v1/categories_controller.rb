class V1::CategoriesController < ApplicationController
    
    def index
        @categories = Category.shortened_categs

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
        params.require(:category).permit(:category_name, :user_id)
    end

end
