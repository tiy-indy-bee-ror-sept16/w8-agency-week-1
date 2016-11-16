class AddImageToItem < ActiveRecord::Migration[5.0]
  def change
    add_column :items, :image_id, :string
  end
end
