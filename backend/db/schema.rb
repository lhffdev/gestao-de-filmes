# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_03_06_195406) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "filmes", force: :cascade do |t|
    t.string "titulo", null: false
    t.string "principais_atores", null: false
    t.string "principais_diretores", null: false
    t.string "fornecedor", null: false
    t.string "idiomas", null: false
    t.float "valor_locacao", null: false
    t.string "nome_capa", null: false
    t.binary "arquivo_capa", null: false
    t.bigint "tipo_midia_id", null: false
    t.bigint "tempo_locacao_id", null: false
    t.bigint "genero_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["genero_id"], name: "index_filmes_on_genero_id"
    t.index ["tempo_locacao_id"], name: "index_filmes_on_tempo_locacao_id"
    t.index ["tipo_midia_id"], name: "index_filmes_on_tipo_midia_id"
    t.index ["titulo"], name: "index_filmes_on_titulo", unique: true
  end

  create_table "generos", force: :cascade do |t|
    t.string "nome", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["nome"], name: "index_generos_on_nome", unique: true
  end

  create_table "tempo_locacoes", force: :cascade do |t|
    t.string "descricao", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["descricao"], name: "index_tempo_locacoes_on_descricao", unique: true
  end

  create_table "tipo_midias", force: :cascade do |t|
    t.string "descricao", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["descricao"], name: "index_tipo_midias_on_descricao", unique: true
  end

  add_foreign_key "filmes", "generos"
  add_foreign_key "filmes", "tempo_locacoes"
  add_foreign_key "filmes", "tipo_midias"
end
