class BaseAction
  attr_reader :context, :params

  class ActionError < StandardError; end

  def initialize(context)
    @context = context
    @params = context.params
  end

  def with_transaction(&block)
    ActiveRecord::Base.transaction do
      yield
    rescue StandardError
      raise
    end
  end

  def error(message)
    raise ActionError, message.to_hash.map {|key, value| value}.join('/') if message.respond_to?(:full_messages)

    raise ActionError, message
  end

end
