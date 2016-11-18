Rails.application.routes.draw do


  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  root 'items#static'
  get '/music' => 'items#static'
  get '/farming' => 'items#static'
  get '/nationalparks' => 'items#static'
  get '/movies' => 'items#static'
  get '/bands' => 'items#static'

  patch '/updatecart' => 'carts#update'
  post '/addtocart' => 'line_items#create'
  get '/editquantity' => 'line_items#update'

  scope '/api' do
    get '/filter' => 'category#filter'
    resources :items
    resources :category
    resources :charges
    resources :carts

  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
