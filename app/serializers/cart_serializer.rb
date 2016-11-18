class CartSerializer < ActiveModel::Serializer
  attributes :id, :token, :shipping_address, :created_at

  has_many :line_items



end
