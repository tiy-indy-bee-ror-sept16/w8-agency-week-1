class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.string :product
      t.string :sku
      t.integer :year
      t.text :description

      t.timestamps
    end
  end
end
