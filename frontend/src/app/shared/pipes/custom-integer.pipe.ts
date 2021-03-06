import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'customInteger'
})
export class CustomIntegerPipe extends DecimalPipe implements PipeTransform {

  transform(value: any): string {
    return super.transform(value, '1.0-0');
  }

}
