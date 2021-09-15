import { Pipe, PipeTransform } from '@angular/core';
import { States } from '@constants/state';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {
  transform(state: string, country: 'USA' | 'CAN'): string {
    if (country === 'CAN') {
      return States.canada[state] || state;
    }
    return States.usa[state] || state;
  }
}
