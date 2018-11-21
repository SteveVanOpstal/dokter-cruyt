import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'phone'})

export class PhonePipe implements PipeTransform {
  transform(value: string): string {
    if (!value || !value.length) {
      return value;
    }
    return `${value.slice(0, 2)}/${value.slice(2, 5)}.${value.slice(5, 7)}.${value.slice(7, 9)}`;
  }
}