class AddNewColumntoCart < ActiveRecord::Migration[5.0]
  def change
    add_column :cart, :completed, :boolean, null: false, default: false
  end
end
