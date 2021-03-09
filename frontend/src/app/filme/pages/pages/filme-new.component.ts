import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ModalAlertComponent } from 'src/app/shared/components/modal-alert/modal-alert.component';
import { FilmeFormComponent } from '../../components/filme-form.component';
@Component({
  selector: 'app-filme-new',
  templateUrl: './filme-new.component.html'
})
export class FilmeNewComponent implements OnInit {

  @ViewChild(ModalAlertComponent)
  private modalAlertComponent: ModalAlertComponent;

  @ViewChild(FilmeFormComponent)
  private filmeFormComponent: FilmeFormComponent;

  constructor(
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    setTimeout(() => this.filmeFormComponent.startForm(), 0);
  }

  salvar(filme) {
    this.filmeFormComponent.formSubmitted = true;

    if (!this.filmeFormComponent.formFilme.valid) {
      return;
    }

    this.filmeFormComponent.habilitarLoadBotaoSalvar = true;

    this.apiService.post('filmes', filme).then(response => {
      this.router.navigate([`filmes/${response['filmeId']}`])
    })
    .catch(error => {
      this.filmeFormComponent.habilitarLoadBotaoSalvar = false;
      this.filmeFormComponent.formSubmitted = false;
      this.modalAlertComponent.show(error.error);
    });
  }
}
