class TempoLocacoesController < ApplicationController
  def index
    @tempo_locacoes = TempoLocacao.all
  end
end
