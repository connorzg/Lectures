Rails.application.routes.draw do
  resources :todos do
    collection do
      get 'completed'
      get 'incomplete'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
