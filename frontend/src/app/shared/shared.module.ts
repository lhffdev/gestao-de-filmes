import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { LoaderComponent } from '../components/loader/loader.component';

import { BackgroundComponent } from './components/background/background.component';
import { ModalAlertComponent } from './components/modal-alert/modal-alert.component';
import { NullPipe } from './pipes/null.pipe';
import { BooleanPipe } from './pipes/boolean.pipe';
import { CustomNumberPipe } from './pipes/custom-number.pipe';
import { CustomIntegerPipe } from './pipes/custom-integer.pipe';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { CustomDateTimePipe } from './pipes/custom-date-time.pipe';


@NgModule({
  declarations: [
    BackgroundComponent,
    ModalAlertComponent,
    LoaderComponent,
    CustomNumberPipe,
    CustomIntegerPipe,
    CustomDatePipe,
    CustomDateTimePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    FormsModule
  ],
  exports: [
    BackgroundComponent,
    ModalAlertComponent,
    LoaderComponent,
    CommonModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    CustomNumberPipe,
    CustomIntegerPipe,
    CustomDatePipe,
    CustomDateTimePipe
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    NullPipe,
    BooleanPipe,
    CustomNumberPipe,
    CustomIntegerPipe,
    CustomDatePipe,
    CustomDateTimePipe
  ]
})
export class SharedModule {}
