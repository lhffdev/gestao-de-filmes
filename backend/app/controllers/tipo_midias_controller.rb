class TipoMidiasController < ApplicationController
  def index
    @tipo_midias = TipoMidia.all
  end
end
