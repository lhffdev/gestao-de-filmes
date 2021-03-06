import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolean'
})
export class BooleanPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    return !!value ? 'Sim' : 'Não';
  }

}
