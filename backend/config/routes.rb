Rails.application.routes.draw do
  scope defaults: {format: :json}, constraints: {id: /\d+/} do
  end
end
