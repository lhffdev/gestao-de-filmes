JSON.parse(File.read(Rails.root.join('lib', 'seeds', 'generos.json')), symbolize_names: true).each do |genero|
	Genero.create!(genero)
end

JSON.parse(File.read(Rails.root.join('lib', 'seeds', 'tempo_locacoes.json')), symbolize_names: true).each do |tempo_locacao|
	TempoLocacao.create!(tempo_locacao)
end

JSON.parse(File.read(Rails.root.join('lib', 'seeds', 'tipo_midias.json')), symbolize_names: true).each do |tipo_midia|
	TipoMidia.create!(tipo_midia)
end
