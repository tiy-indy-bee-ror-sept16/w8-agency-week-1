class CartsController < ApplicationController




  def show
    unless @cart = Cart.where.not(completed: true).find_by(token: params[:token])
      @cart = Cart.create
    end
    render json: @cart
  end















end
