import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmeComponent } from './pages/pages/filme.component';
import { FilmeNewComponent } from './pages/pages/filme-new.component';
import { FilmeShowComponent } from './pages/pages/filme-show.component';
import { FilmeEditComponent } from './pages/pages/filme-edit.component';

const routes: Routes = [
  { path: '', component: FilmeComponent },
  { path: 'adicionar', data: { title: 'Adicionar filme' }, component: FilmeNewComponent },
  { 
    path: ':id', data: { title: 'Visualizar filme' }, children: [
      { path: '', component: FilmeShowComponent },
      { path: 'alterar', data: { title: 'Alterar filme' }, component: FilmeEditComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmeRoutingModule { }
