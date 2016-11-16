class ItemSerializer < ActiveModel::Serializer
  attributes :id, :product, :sku, :year, :description, :created_at

def sku
  if
  Refile.attachment_url(object, :sku, :fit, 800, 800, format: "png")
  end
end
end
