import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { IMaskModule } from 'angular-imask';

import { LoaderComponent } from '../components/loader/loader.component';

import { BackgroundComponent } from './components/background/background.component';
import { ModalAlertComponent } from './components/modal-alert/modal-alert.component';
import { NullPipe } from './pipes/null.pipe';
import { CustomDatePipe } from './pipes/custom-date.pipe';
@NgModule({
  declarations: [
    BackgroundComponent,
    ModalAlertComponent,
    LoaderComponent,
    CustomDatePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    NgSelectModule,
    IMaskModule
  ],
  exports: [
    BackgroundComponent,
    ModalAlertComponent,
    LoaderComponent,
    CommonModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    NgSelectModule,
    IMaskModule,
    CustomDatePipe
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    NullPipe,
    CustomDatePipe
  ]
})
export class SharedModule {}
