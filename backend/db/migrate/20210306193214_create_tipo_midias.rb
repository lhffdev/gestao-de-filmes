class CreateTipoMidias < ActiveRecord::Migration[6.0]
  def change
    create_table :tipo_midias do |t|
      t.string :descricao, null: false, index: { unique: true }

      t.timestamps
    end
  end
end
