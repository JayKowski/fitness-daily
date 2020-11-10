Rails.application.routes.draw do
  post 'v1/login' => 'v1/users#login'
  get 'v1/auto_login' => 'v1/users#auto_login'
  post 'v1/signup' => 'v1/users#create'
  
  namespace :v1 do
    resources :reps
    resources :stats
    resources :workouts
    resources :categories
    resources :users
  end
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
