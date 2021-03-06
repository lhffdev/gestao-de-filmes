import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { BackgroundComponent } from './components/background/background.component';
import { NullPipe } from './pipes/null.pipe';
import { BooleanPipe } from './pipes/boolean.pipe';
import { CustomNumberPipe } from './pipes/custom-number.pipe';
import { CustomIntegerPipe } from './pipes/custom-integer.pipe';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { CustomDateTimePipe } from './pipes/custom-date-time.pipe';


@NgModule({
  declarations: [
    BackgroundComponent
  ],
  imports: [
    CommonModule,
    NgbDropdownModule,
    HttpClientModule,
    MatIconModule,
    FormsModule
  ],
  exports: [
    BackgroundComponent,
    CommonModule,
    HttpClientModule,
    NgbDropdownModule,
    MatIconModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    NullPipe,
    BooleanPipe,
    CustomNumberPipe,
    CustomIntegerPipe,
    CustomDatePipe,
    CustomDateTimePipe,
  ]
})
export class SharedModule {}
