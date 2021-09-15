import { Pipe, PipeTransform } from '@angular/core';
import { Countries, Country } from '@constants/country';

@Pipe({
  name: 'country'
})
export class CountryPipe implements PipeTransform {
  transform(country: Country): string {
    return Countries[country];
  }

}
