class UsersController < ApplicationController
  
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
    render json: note
  end

  def create
    user = User.new(user_params)

    if user.save
      render json: user
    else
      render json: user.errors
    end
  end

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
      params.require(:user).permit(:name)
    end
end
