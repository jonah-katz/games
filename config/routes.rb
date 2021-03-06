Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do
    post :challenge, to: 'games#create'
    get :users, to: 'users#index'
    get :games, to: 'games#index'
    get '/game/:id', to: 'games#show'
    put 'move', to: 'games#update'
  end

  get '/games/get_game_types', to: 'games#get_game_types'

  mount ActionCable.server => '/cable'

  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  devise_scope :user do
    get 'users/get_current_user', :to => 'users/sessions#get_current_user'
  end
end
