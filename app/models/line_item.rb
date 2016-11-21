class LineItem < ApplicationRecord
  belongs_to :cart
  belongs_to :item

  after_save :update_item_available
  after_destroy :release_inventory

 def cost
   item.price * quantity
 end

 def update_item_available
   if quantity_was && quantity_changed?
     num = quantity_change[1] - quantity_change[0]
   else
     num = quantity
   end
   item.update_available(num) if quantity_changed?
 end

 def release_inventory
   item.update_available(-quantity)
 end



end
