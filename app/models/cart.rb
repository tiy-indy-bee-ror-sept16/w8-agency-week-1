class Cart < ApplicationRecord
  has_many :line_items
  has_many :items, through: :line_items
  has_secure_token :token



  def subtotal
    line_items.reduce(0){|sum, line_item| sum += line_item.cost}
  end


  def taxes
    subtotal * 0.6
  end


  def shipping
    shipping = 500
  end

  def total
    taxes + shipping + subtotal
  end


  def completed
  end






end
