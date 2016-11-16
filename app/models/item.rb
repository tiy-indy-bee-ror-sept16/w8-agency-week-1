class Item < ApplicationRecord
  include PgSearch

  has_many :comments
  has_many :carts, through: :line_items
  belongs_to :category
  attatchment :image

  pg_search_scope :search_by_category, :associated_against => {
      :category => :name
    }, against: :name





end
