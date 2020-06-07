Rails.application.routes.draw do
  # get 'welcome/home'
  # get 'welcome/about_us'
  # get 'welcome/contact_us'
  root 'welcome#home'
  get 'about', to: 'welcome#about_us'
  get 'contact', to: 'welcome#contact_us'
  get 'cart/show'
  resources :shops, only:[:index, :show]
  resources :products
  resources :order_items
  resource :carts, only:[:show]
  # root 'shops#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
