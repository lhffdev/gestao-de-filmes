json.call(
  @filme,
  :id,
  :titulo,
  :principais_atores,
  :principais_diretores,
  :fornecedor,
  :idiomas,
  :valor_locacao,
  :tipo_midia_id,
  :tipo_midia_descricao,
  :tempo_locacao_id,
  :tempo_locacao_descricao,
  :genero_id,
  :genero_nome,
)
json.data_cadastro @filme.created_at.to_date.to_s