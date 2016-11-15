class CatagoriesController < ApplicationController


  def show
    @category = Catagories.find_by(name: params[:id])
    render json: @category
  end






end
