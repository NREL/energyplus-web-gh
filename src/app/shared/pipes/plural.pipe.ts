import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plural'
})
export class PluralPipe implements PipeTransform {

  // Add an 's' to a word if the quantity is not 1
  transform(text: string, quantity?: number): string {
    if (quantity === 1) {
      return text;
    }
    return `${text}s`;
  }

}
