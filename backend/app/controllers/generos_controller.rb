class GenerosController < ApplicationController
  def index
    @generos = Genero.all
  end
end
