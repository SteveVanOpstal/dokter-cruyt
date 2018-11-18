import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'telephone'})

export class TelephonePipe implements PipeTransform {
  transform(value: string): string {
    const end = value.slice(9) ? ' ' + value.slice(9) : '';
    return value.slice(0, 2) + ' ' + value.slice(2, 5) + ' ' + value.slice(5, 7) + ' ' +
        value.slice(7, 9) + end;
  }
}
