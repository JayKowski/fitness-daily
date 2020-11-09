Rails.application.routes.draw do
  resources :reps
  resources :stats
  resources :workouts
  resources :categories
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
