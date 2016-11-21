class Item < ApplicationRecord
  # include PgSearch

  has_many :comments
  has_many :line_items
  has_many :carts, through: :line_items
  belongs_to :category
  attachment :image

  validates :price, presence: true


  # pg_search_scope :search_by_category, :associated_against => {
  #     :category => :name
  #   }, against: :name

  def update_available(ordered)
    update(available: available - ordered)
  end




end
