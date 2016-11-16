class ItemSerializer < ActiveModel::Serializer
  attributes :id, :product, :sku, :year, :description, :created_at, :image, :price

  has_many :comments
  has_one :category


def image
  Refile.attachment_url(object, :image, :fit, 800, 800, format: "png")
end
end
