class V1::UsersController < ApplicationController
    before_action :authorized, only: [:auto_login]

    def index
        @users = User.all

        render json: @users, status: :ok
    end

    def create
        @user = User.create(user_params)

        if @user.valid?
            @user.save!
            token = encode_token({user_id: @user.id})
            render json: { :id => @user.id, username: @user.username, :status => :created, :token => token }
        else
            render json: { :error => @user.errors, :status => :unprocessable_entity }
        end
    end

    def login
        @user = User.find_by(username: params[:username])

        if @user && @user.authenticate(params[:password])
            token = encode_token({user_id: @user.id})
            render json: { :id => @user.id, :username => @user.username, :token => token, :status => :success }
        else
             render json: { :error => 'username or password is invalid', :status => :not_found }
        end
    end

    def auto_login
        render json: { :user => @user.id, :username => @user.username }
    end


    private

    def user_params
        params.require(:user).permit(:username, :password )
    end
end
