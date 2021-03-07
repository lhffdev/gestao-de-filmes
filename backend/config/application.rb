require_relative 'boot'

require "rails"
require "active_model/railtie"
require "active_record/railtie"
require "action_controller/railtie"

Bundler.require(*Rails.groups)

module GestaoFilmesApi
  class Application < Rails::Application
    config.load_defaults 6.0
    config.api_only = true
    config.i18n.available_locales = ['pt-BR']
    config.i18n.default_locale = 'pt-BR'
    config.active_record.default_timezone = :local
    config.action_controller.action_on_unpermitted_parameters = false

    config.action_dispatch.rescue_responses.merge!(
      'ActiveRecord::RecordNotFound' => 404,
      'ApplicationController::ActionError' => 422,
      'ActiveRecord::RecordInvalid' => 500
    )
  end
end
