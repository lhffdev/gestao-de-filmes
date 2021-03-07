class CreateTempoLocacoes < ActiveRecord::Migration[6.0]
  def change
    create_table :tempo_locacoes do |t|
      t.string :descricao, null: false, index: { unique: true }

      t.timestamps
    end
  end
end
