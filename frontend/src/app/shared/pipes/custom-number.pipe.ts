import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'customNumber'
})
export class CustomNumberPipe extends DecimalPipe implements PipeTransform {

  transform(value: any, digits?: string): string {
    if (isNaN(parseFloat(value))) {
      return value;
    }
    return super.transform(value, digits || '1.4-4');
  }

}
