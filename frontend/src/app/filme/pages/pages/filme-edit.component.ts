import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ModalAlertComponent } from 'src/app/shared/components/modal-alert/modal-alert.component';
import { FilmeFormComponent } from '../../components/filme-form.component';
@Component({
  selector: 'app-filme-edit',
  templateUrl: './filme-edit.component.html'
})
export class FilmeEditComponent implements OnInit {

  id = this.route.snapshot.params.id;
  filme;
  capa;

  @ViewChild(ModalAlertComponent)
  private modalAlertComponent: ModalAlertComponent;

  @ViewChild(FilmeFormComponent)
  private filmeFormComponent: FilmeFormComponent;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) { }

  async ngOnInit() {
    await this.apiService.get(`filmes/${this.id}`)
    .then(dadosFilme => {
      this.filme = dadosFilme;
    })
    .catch(error => this.modalAlertComponent.show(error.error));
    
    await this.apiService.downloadFile(`filmes_capa/${this.id}`)
    .then(file => {
      this.capa = {capa: new File([file], this.filme.fileName)}
    })
    .catch(error => this.modalAlertComponent.show(error.error));
    
    this.filmeFormComponent.startForm({...this.filme, ...this.capa});
  }

  salvar(filme) {
    this.filmeFormComponent.formSubmitted = true;

    if (!this.filmeFormComponent.formFilme.valid) {
      return;
    }

    this.filmeFormComponent.habilitarLoadBotaoSalvar = true;

    this.apiService.patch(`filmes/${this.id}`, filme).then(response => {
      this.router.navigate([`filmes/${response['filmeId']}`]);
    })
    .catch(error => {
      this.filmeFormComponent.formSubmitted = false;
      this.filmeFormComponent.habilitarLoadBotaoSalvar = false;
      this.modalAlertComponent.show(error.error);
    });
  }
}
