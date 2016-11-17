Rails.application.routes.draw do


  root 'items#static'


  scope '/api' do
    get '/filter' => 'category#filter'
    resources :items
    resources :category 
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
