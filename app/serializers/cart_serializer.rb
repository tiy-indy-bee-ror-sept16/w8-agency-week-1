class CartSerializer < ActiveModel::Serializer
  attributes :id, :token, :shipping_address, :created_at, :subtotal, :taxes, :shipping, :total

  has_many :line_items



end
