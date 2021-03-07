import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ModalAlertComponent } from 'src/app/shared/components/modal-alert/modal-alert.component';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html'
})
export class FilmeComponent implements OnInit {

  filmes;
  searchTerm;
  pesquisando = false;

  @ViewChild(ModalAlertComponent)
  private modalAlertComponent: ModalAlertComponent;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.search()
  }

  search(searchTerm = null) {
    this.pesquisando = true;

    this.apiService.get('filmes', searchTerm ? {searchTerm: searchTerm} : {})
    .then(filmes => {
      this.filmes = filmes;
      this.pesquisando = false;
    })
    .catch(error => {
      this.pesquisando = false;
      this.modalAlertComponent.show(error.error);
    })
  }

  customSearch() {
    this.search(this.searchTerm);
    return false;
  }

  showFilme(id) {
    return `/filmes/${id}`;
  }
}
