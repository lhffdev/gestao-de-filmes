class ApplicationController < ActionController::API
  class ActionError < StandardError; end

  rescue_from StandardError do |e|
    render json: { error: e.message }, status: ActionDispatch::ExceptionWrapper.status_code_for_exception(e.class.name)
  end
end
