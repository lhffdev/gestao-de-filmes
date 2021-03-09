class Filme < ApplicationRecord
  validates :titulo,
    presence: { message: 'É obrigatório informar o título.' },
    length: {
      maximum: 100,
      message: 'O tamanho máximo permitido para o título é de 100 caracteres.'
    }
  validates :principais_atores,
    presence: { message: 'É obrigatório informar os principais atores.' },
    length: {
      maximum: 200,
      message: 'O tamanho máximo permitido para os principais atores é de 200 caracteres.'
    }
  validates :principais_diretores,
    presence: { message: 'É obrigatório informar os principais diretores.' },
    length: {
      maximum: 200,
      message: 'O tamanho máximo permitido para os principais diretores é de 200 caracteres.'
    }
  validates :idiomas,
    presence: { message: 'É obrigatório informar os idiomas.' },
    length: {
      maximum: 50,
      message: 'O tamanho máximo permitido para os idiomas é de 50 caracteres.'
    }
  validates :fornecedor,
    presence: { message: 'É obrigatório informar o fornecedor.' },
    length: {
      maximum: 100,
      message: 'O tamanho máximo permitido para o fornecedor é de 100 caracteres.'
    }
  validates :fornecedor,
    presence: { message: 'É obrigatório informar os idiomas.' },
    length: {
      maximum: 100,
      message: 'O tamanho máximo permitido para os idiomas é de 100 caracteres.'
    }
  validates :valor_locacao, numericality: { 
    greater_than: 0,
    message: 'O Valor da locação não pode ser menor ou igual a zero.'
  }
  validates :tipo_midia_id, presence: { message: 'É obrigatório informar o tipo de mídia.' }
  validates :tempo_locacao, presence: { message: 'É obrigatório informar o tempo de locação.' }
  validates :genero_id, presence: { message: 'É obrigatório informar o gênero.' }

  belongs_to :genero, optional: true
  belongs_to :tempo_locacao, optional: true
  belongs_to :tipo_midia, optional: true

  def self.list_all
    select('
      filmes.*,
      generos.id as genero_id,
      generos.nome as genero_nome,
      tempo_locacoes.id as tempo_locacao_id,
      tempo_locacoes.descricao as tempo_locacao_descricao,
      tipo_midias.id as tipo_midia_id,
      tipo_midias.descricao as tipo_midia_descricao
    ')
    .left_outer_joins(
      :genero,
      :tempo_locacao,
      :tipo_midia
    )
    .order('filmes.id')
  end

  def self.search_by_id(filme_id)
    list_all.where(['filmes.id = ?', filme_id]).first
  end

  def self.filter_list(search_term)
    search_term = search_term.to_s.strip

    if search_term.match?(/^\d+$/)
      list_all.where('filmes.id = ?', search_term.to_i)
    elsif search_term.match?(/\A(\d{1,2}\/\d{1,2}\/\d{4})+\z/) && Date.strptime(search_term, '%d/%m/%y').present?
      list_all.where('cast(filmes.created_at as date) = ?', search_term.to_date)
    else
      list_all.where(<<~SQL, "%#{search_term}%", "%#{search_term}%")
        filmes.titulo ilike ? or
        generos.nome ilike ?
      SQL
    end
  end
end
