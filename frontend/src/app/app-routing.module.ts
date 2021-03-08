import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ErrorComponent } from './pages/error/error.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', children: [
    {
      path: '', component: LayoutComponent, children: [
        { path: '', component: HomeComponent},
        {
          path: 'filmes',
          data: { title: 'Filmes' },
          loadChildren: () => import('./filme/filme.module').then(m => m.FilmeModule)
        }
      ]
    }
  ]},
  { path: '404', component: NotFoundComponent },
  { path: '500', component: ErrorComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
