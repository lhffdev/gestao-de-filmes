class FilmesCapaController < ApplicationController
  def show
    filme = Filme.find(params[:id])
    send_data filme.arquivo_capa, type: "image/jpeg", filename: filme.nome_capa
  end
end
