Rails.application.routes.draw do


root 'items#static'

  resources :items
  resources :category

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
