require 'test_helper'

class LineItemTest < ActiveSupport::TestCase

  def test_updating_quantity
    item = Item.create!(
      category: Category.new(name: "Hey"),
      available: 20,
      price: 200
    )
    cart = Cart.create!
    line_item = LineItem.create!(
      item: item,
      cart: cart,
      quantity: 3
    )
    assert_equal 17, item.available
    line_item.update(quantity: 4)
    assert_equal 16, item.available
    line_item.update(quantity: 4)
    assert_equal 16, item.available
    line_item.update(quantity: 2)
    assert_equal 18, item.available
    line_item.destroy!
    assert_equal 20, item.available
  end
end
