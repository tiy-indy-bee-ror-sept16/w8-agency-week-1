Rails.application.routes.draw do


root 'items#static'
  # 
  # /items/:category => 'items#static'
  # /search-results
  # /checkout
  # /cart
  # /thank-you


  scope '/api' do
    resources :items
    resources :category
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
