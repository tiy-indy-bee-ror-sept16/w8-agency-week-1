class AddNewColumnToItem < ActiveRecord::Migration[5.0]
  def change
    add_column :items, :available, :integer
  end
end
