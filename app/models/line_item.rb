class LineItem < ApplicationRecord
  belongs_to :cart
  belongs_to :item

 def cost
   item.price * quantity
 end


end
