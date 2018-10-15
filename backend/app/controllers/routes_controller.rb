class RoutesController < ApplicationController
    skip_before_action :authorized, only: [:create]
  
    def profile
      render json: current_user, status: :accepted
    end
    
    def index
      users = User.all
      render json: users
    end
  
    def show
      user = User.find(params[:id])
      render json: user
    end
  
    def new
      user = User.new(user_params)
      render json: user
    end
  
    def create
      user = User.create(user_params)
      render json: {
        user: user,
        token: encode_token({ user_id: user.id })
      }
    end
  
    # def create
    #   user = User.new(user_params)
      
    #   if user.save
    #     token = encode_token(user_id: user.id)
    #     render json: { user: user, jwt: token }, status: :created
    #   else
    #     render json: { error: 'failed to create user' }, status: :not_acceptable
    #   end
    # end
  
    def edit
      user = User.find(params[:id])
      render json: user
    end
  
    def update
      if user.update(user_params)
        render json: user
      else
        render json: user.errors
      end
    end
  
    def destroy
      user.destroy
    end
  
    private
      def user_params
        params.require(:user).permit(:username, :email, :password)
      end
  end