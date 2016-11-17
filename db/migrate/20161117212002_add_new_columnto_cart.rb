class AddNewColumntoCart < ActiveRecord::Migration[5.0]
  def change
    add_column :carts, :completed, :boolean, null: false, default: false
    add_column :carts, :shipping_address, :string
  end
end
