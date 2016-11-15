class ItemsController < ApplicationController

def index
end

def show
end


def all
  @item = Item.all
  render json: @item
end








end
