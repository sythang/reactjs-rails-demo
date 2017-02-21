class UsersController < ApplicationController

  def index
    @users = User.all
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user, status: :ok
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end
  private
  def user_params
    params.require(:user).permit(:name, :email, :bod)
  end
end
