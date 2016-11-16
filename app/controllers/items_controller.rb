class ItemsController < ApplicationController

def create

end

def index
end

def show
  @item = Item.all
  render json: @item
end









end
