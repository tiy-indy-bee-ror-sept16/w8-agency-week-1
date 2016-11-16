class ItemsController < ApplicationController

def create

end

def index
  @item = Item.all
  render json: @item
end

def show
end









end
