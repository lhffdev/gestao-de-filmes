class CreateFilmes < ActiveRecord::Migration[6.0]
  def change
    create_table :filmes do |t|
      t.string :titulo, null: false, index: { unique: true }
      t.string :principais_atores, null: false
      t.string :principais_diretores, null: false
      t.string :fornecedor, null: false
      t.string :idiomas, null: false
      t.float :valor_locacao, null: false
      t.string :nome_capa, null: false
      t.binary :arquivo_capa, null: false
      t.references :tipo_midia, null: false, foreign_key: true
      t.references :tempo_locacao, null: false, foreign_key: true
      t.references :genero, null: false, foreign_key: true

      t.timestamps
    end
  end
end
