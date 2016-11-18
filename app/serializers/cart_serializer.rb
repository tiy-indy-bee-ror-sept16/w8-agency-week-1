class CartSerializer < ActiveModel::Serializer
  attributes :id, :token, :item_id, :quantity, :shipping_address, :created_at

  has_many :line_items



end
