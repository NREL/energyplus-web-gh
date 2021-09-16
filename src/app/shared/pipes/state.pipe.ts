import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '@constants/country';
import { States } from '@constants/state';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {
  transform(state: string, country: Country): string {
    if (country === 'CAN') {
      return States.canada[state] || state;
    } else if (country === 'USA') {
      return States.usa[state] || state;
    }
    return state;
  }
}
