class Item < ApplicationRecord
  has_many :comments
  has_many :carts, through: :line_items
  belongs_to :category








end
