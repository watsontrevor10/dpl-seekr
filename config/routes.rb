Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do

    resources :jobs do
      resources :interviews
    end

    resources :jobs do
      resources :tasks
    end

    resources :jobs do
      resources :contacts
    end

    resources :jobs do
      resources :notes
    end

  end
  
end
