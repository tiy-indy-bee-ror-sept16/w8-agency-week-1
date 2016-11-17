class ItemsController < ApplicationController

  def create
  end

  def index
    @item = Item.all
    render json: @item
  end

  def static
  end

  def show
    @item = Item.find_by(params[:id])
    render json: @item
  end








end
