class ItemsController < ApplicationController

def create

end

def index
  @item = Item.all.order("created_at DESC")
  render json: @item
end

def show
end









end
