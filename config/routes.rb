Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
# resources :people
get '/people', to: 'people#index'
post '/people', to: 'people#create'
get '/people/new', to: 'people#new'
get '/people/:id/edit', to: 'people#edit'
get '/people/:id', to: 'people#show'
patch '/people/:id', to: 'people#update'
delete '/people/:id', to: 'people#destroy'
end
