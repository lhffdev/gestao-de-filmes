import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// import { NgSelectModule } from '@ng-select/ng-select';

import { FilmeRoutingModule } from './filme-routing.module';

import { FilmeComponent } from './pages/pages/filme.component';
import { FilmeNewComponent } from './pages/pages/filme-new.component';
import { FilmeShowComponent } from './pages/pages/filme-show.component';
import { FilmeEditComponent } from './pages/pages/filme-edit.component';

// import { ModalAlertComponent } from 'src/app/components/modal-alert/modal-alert.component';

@NgModule({
  declarations: [
    FilmeComponent,
    FilmeNewComponent,
    FilmeShowComponent,
    FilmeEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FilmeRoutingModule,
  ]
})
export class FilmeModule { }
