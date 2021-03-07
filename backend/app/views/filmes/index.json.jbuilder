json.array! @filmes do |filme|
  json.call(filme, :id, :titulo, :genero_nome, :valor_locacao)
  json.data_cadastro filme.created_at.to_date.to_s
end
