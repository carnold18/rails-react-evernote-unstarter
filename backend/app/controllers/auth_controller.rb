class AuthController < ApplicationController
  skip_before_action :authorized, only: [:create, :show]

  #added show with MC

  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      render json: {
        user: user,
        token: encode_token({ user_id: user.id })
      }
    else
      render json: {
        error: "Username or password are incorrect"
      }
    end
  end
 
  # def create
  #   user = User.find_by(username: user_login_params[:username])
  #   if user && user.authenticate(user_login_params[:password])
  #     token = encode_token({ user_id: user.id })
  #     render json: { user: user, jwt: token }, status: :accepted
  #   else
  #     render json: { message: 'Invalid username or password' }, status: :unauthorized
  #   end
  # end
 
  # private
 
  # def user_login_params
  #   params.require(:user).permit(:username, :password)
  # end
end