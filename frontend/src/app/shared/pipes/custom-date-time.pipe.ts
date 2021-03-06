import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'customDateTime'
})
export class CustomDateTimePipe implements PipeTransform {

  transform(value: any): string {
    if (value === null || value === undefined || value === '') {
      return null;
    }

    return moment(value).format('DD/MM/YYYY HH:mm:ss');
  }

}
