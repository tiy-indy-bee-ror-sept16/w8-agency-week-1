class CartSerializer < ActiveModel::Serializer
  attributes :id, :token, :created_at, :subtotal, :taxes,
            :street, :city, :state, :zipcode, :country, :total

  has_many :line_items



end
