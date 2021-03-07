class FilmesController < ApplicationController
  def index
    if params[:search_term].present?
      @filmes = Filme.filter_list(params[:search_term])
    else
      @filmes = Filme.list_all
    end
  end

  def show
    @filme = Filme.search_by_id(params[:id])

    raise ActiveRecord::RecordNotFound, 'Filme não localizado.' if @filme.nil?
  end

  def create
    filme = Filme.new(filme_params)

    error 'É obrigatório informar a capa do filme.' unless filme_capa_params[:capa].present?
    
    filme.nome_capa = filme_capa_params[:capa].original_filename
    filme.arquivo_capa = filme_capa_params[:capa].read
    
    error filme.errors unless filme.save
      
    render json: { filmeId: filme.id}
  end

  def update
    filme = Filme.find(params[:id])
    filme.attributes = filme_params

    if filme_capa_params[:capa].present?
      filme.nome_capa = filme_capa_params[:capa].original_filename
      filme.arquivo_capa = filme_capa_params[:capa].read
    end
    
    error filme.errors unless filme.save
      
    render json: { filmeId: filme.id}
  end

  def destroy
    Filme.find(params[:id]).destroy
  end

  private

  def filme_params
    params.permit(
      :titulo,
      :principais_atores,
      :principais_diretores,
      :fornecedor,
      :idiomas,
      :valor_locacao,
      :tipo_midia_id,
      :tempo_locacao_id,
      :genero_id
    )
  end

  def filme_capa_params
    params.permit(
      :capa
    )
  end
end
