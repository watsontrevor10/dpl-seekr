Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :users, only: :update
    resources :jobs do
      resources :interviews
      resources :notes
      resources :tasks
      resources :contacts
    end

    post 'tasks/tasks_due', to: 'jobs#tasks_due'
    post 'interviews/upcoming_interviews', to: 'jobs#upcoming_interviews'
  end
  
end
