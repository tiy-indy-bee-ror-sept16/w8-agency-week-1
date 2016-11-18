class LineItemsController < ApplicationController


  def create
    if params[:token]
      @line_item = LineItem.new(
      item_id:  params[:item_id],
      token: params[:token],
      quantity: params[:quantity],
      cart: Cart.where[token: params[:token]].first

      )
    else
      @line_item = LineItem.new(
      item_id:  params[:item_id],
      quantity: params[:quantity],
      cart: Cart.new
      )
    end
    if @line_item.save
      render json: @line_item
    else
      render json: @line_item.errors.full_message, status: :unprocessable_entity
    end
<<<<<<< HEAD
    end
=======
  end

>>>>>>> 0370bc0338f1a1f642a21a5da8a9879b6baa2202
  def update
    @line_item = LineItem.find(params :id)
    @line_item.quantity = params :quantity
  end

  def destroy
    @line_item = LineItem.find(params :id)
    @line_items.destroy!
    render json: "Item Removed From Cart"
  end

end
