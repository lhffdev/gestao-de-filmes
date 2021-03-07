import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ModalAlertComponent } from 'src/app/shared/components/modal-alert/modal-alert.component';

@Component({
  selector: 'app-filme-show',
  templateUrl: './filme-show.component.html',
  styleUrls: ['./filme-show.component.scss']
})
export class FilmeShowComponent implements OnInit {

  id = this.route.snapshot.params.id;
  deletando = false;
  filme;
  capa;

  @ViewChild(ModalAlertComponent)
  private modalAlertComponent: ModalAlertComponent;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private sanitizer : DomSanitizer
  ) { }

  ngOnInit() {
    this.apiService.get(`filmes/${this.id}`).then(filme => {
      this.filme = filme;
    })
    .catch(error => this.modalAlertComponent.show(error.error));

    this.apiService.downloadFile(`filmes_capa/${this.id}`)
    .then(capa => {
      this.capa = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(capa));
    })
    .catch(error => this.modalAlertComponent.show(error.error));
  }

  voltar() {
    this.router.navigate(['filmes']);
  }

  alterar() {
    this.router.navigate([`filmes/${this.id}/alterar`]);
  }

  deletar() {
    this.deletando = true;

    this.apiService.delete(`filmes/${this.id}`)
    .then(_ => {
      this.router.navigate(['filmes']);
    })
    .catch(error => this.modalAlertComponent.show(error.error));
  }
}
