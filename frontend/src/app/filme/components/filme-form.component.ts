import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ModalAlertComponent } from 'src/app/shared/components/modal-alert/modal-alert.component';

@Component({
  selector: 'app-filme-form',
  templateUrl: './filme-form.component.html',
  styleUrls: ['./filme-form.component.scss']
})
export class FilmeFormComponent implements OnInit {

  fileName = 'Nenhum arquivo selecionado';
  file;
  generos;
  tempoLocacoes;
  tipoMidias;
  filme;
  formFilme;
  formSubmitted = false;
  habilitarLoadBotaoSalvar = false;
  decimal2Mask = {
    mask: Number,
    scale: 2,
    signed: false,
    thousandsSeparator: '.',
    padFractionalZeros: true,
    normalizeZeros: false,
    radix: ',',
    mapToRadix: ['.']
  };

  @ViewChild(ModalAlertComponent)
  private modalAlertComponent: ModalAlertComponent;

  @Output() save = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.get('generos').then(generos => {
      this.generos = generos;
    })
    .catch(error => this.modalAlertComponent.show(error.error));

    this.apiService.get('tempo_locacoes').then(tempoLocacoes => {
      this.tempoLocacoes = tempoLocacoes;
    })
    .catch(error => this.modalAlertComponent.show(error.error));

    this.apiService.get('tipo_midias').then(tipoMidias => {
      this.tipoMidias = tipoMidias;
    })
    .catch(error => this.modalAlertComponent.show(error.error));
  }

  startForm(filme = {}) {
    this.filme = filme;

    this.formFilme = this.formBuilder.group({
      titulo: [filme['titulo'], Validators.required],
      genero: [filme['generoId'], Validators.required],
      tipoMidia: [filme['tipoMidiaId'], Validators.required],
      principaisAtores: [filme['principaisAtores'], Validators.required],
      principaisDiretores: [filme['principaisDiretores'], Validators.required],
      idiomas: [filme['idiomas'], Validators.required],
      fornecedor: [filme['fornecedor'], Validators.required],
      tempoLocacao: [filme['tempoLocacaoId'], Validators.required],
      valorLocacao: [filme['valorLocacao'], Validators.required],
      capa: [filme['capa'], Validators.required]
    });

    if (this.isEdition) {
      this.fileName = this.filme.nomeCapa;
    }
  }

  verificarValidTouched(nomeCampo) {
    const campo = this.campoFormOrdemDeServico(nomeCampo);
    return campo.invalid && campo.touched;
  }

  campoFormOrdemDeServico(nomeCampo) {
    return this.formFilme.get(nomeCampo);
  }

  onFileChange(event) {
    const file = event.target.files[0];

    if (!file.type.includes('image')) {
      this.modalAlertComponent.show('Só é permitido selecionar arquivos do tipo imagem.')
      return;
    }
    
    this.fileName = file.name
    setTimeout(() => this.formFilme.patchValue({capa: file}), 0);
  }

  form() {
    let formData = new FormData();
    formData.append('titulo', this.formFilme.value.titulo)
    formData.append('generoId', this.formFilme.value.genero)
    formData.append('tipoMidiaId', this.formFilme.value.tipoMidia)
    formData.append('principaisAtores', this.formFilme.value.principaisAtores)
    formData.append('principaisDiretores', this.formFilme.value.principaisDiretores)
    formData.append('idiomas', this.formFilme.value.idiomas)
    formData.append('fornecedor', this.formFilme.value.fornecedor)
    formData.append('tempoLocacaoId', this.formFilme.value.tempoLocacao)
    formData.append('valorLocacao', this.formFilme.value.valorLocacao)
    formData.append('capa', this.formFilme.value.capa)

    return formData;
  }

  get isEdition() {
    return !!this.filme.id;
  }

  salvar() {
    this.save.emit(this.form());
  }

  calcelar() {
    this.router.navigate([`filmes${this.isEdition ? `/${this.filme.id}` : ''}`]);
  }

}
