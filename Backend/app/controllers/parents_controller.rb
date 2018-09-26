class ParentsController < ApplicationController

  def index
    @parent = Parent.all
    render json: @parent
  end

  def create
    parent = Parent.create(parent_params)
    if parent.valid?
      render json: parent
    else
      render json: parent.errors, status: :unprocessable_entity
    end
  end

  def parent_params
    params.require(:parent).permit(:name, :petname, :email, :phone, :interest)
  end

end
