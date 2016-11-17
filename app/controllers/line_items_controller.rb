class LineItemsController < ApplicationController

  def create
    if params(:token)
      @line_item = LineItem.new(
      item_id:  params[:item_id]
      token_id: params[:token_id]
      quantity: params[:quantity]
      cart_id: Cart.where[:token params[:token]].first
      )
    else
      @line_item = LineItem.new(
      item_id:  params[:item_id]
      token_id: params[:token_id]
      quantity: params[:quantity]
      cart_id: Cart.new
      )
    end

    if @line_item.save
      render @json: @line_item
    else
      render json: @line_item.errors.full_message, status: :unprocessable_entity
    end
    end
  end
  def update
    @line_item = LineItem.find(params :id)
    @line_item.quantity = params :quantity
  end

  def destroy
    @line_item = LineItem.find(params :id)
    @line_items.destroy!
    render @json "Item Removed From Cart"
  end
end
