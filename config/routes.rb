Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    
    resources :applications do
      resources :interviews
    end

    resources :interviews do
      resources :todos
    end

  end

end
