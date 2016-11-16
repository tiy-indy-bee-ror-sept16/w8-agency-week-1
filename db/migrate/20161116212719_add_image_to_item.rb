class AddImageToItem < ActiveRecord::Migration[5.0]
  def change
    add_colum :items, :item_id, :string
  end
end
