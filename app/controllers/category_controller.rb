class CategoryController < ApplicationController



  def show
    @category = Catagory.find_by(name: params[:id])
    render json: @category
  end




end
