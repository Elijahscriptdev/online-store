Rails.application.routes.draw do
  get 'welcome/home'
  get 'cart/show'
  resources :shops, only:[:index, :show]
  resources :products
  resources :order_items
  resource :carts, only:[:show]
  root 'shops#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
