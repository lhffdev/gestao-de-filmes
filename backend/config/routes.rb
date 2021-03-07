Rails.application.routes.draw do
  scope defaults: {format: :json}, constraints: {id: /\d+/} do
    resources :generos, only: [:index]
    resources :tempo_locacoes, only: [:index]
    resources :tipo_midias, only: [:index]
    resources :filmes
    resources :filmes_capa, only: [:show]
  end
end
