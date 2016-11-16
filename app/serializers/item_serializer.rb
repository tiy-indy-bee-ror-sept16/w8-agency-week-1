class ItemSerializer < ActiveModel::Serializer
  attributes :id, :product, :sku, :year, :description, :created_at

  has_many :comments
  has_many :carts, through: :line_items
  belongs_to :category
  attachment :image
  
def sku
  if
  Refile.attachment_url(object, :sku, :fit, 800, 800, format: "png")
  end
end
end
