Rails.application.routes.draw do


  root 'items#static'
  get '/music' => 'items#static'
  get '/farming' => 'items#static'
  get '/nationalparks' => 'items#static'
  get '/movies' => 'items#static'
  get '/bands' => 'items#static'

  scope '/api' do
    get '/filter' => 'items#static'
    get '/filter' => 'category#filter'
    resources :items
    resources :category
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
