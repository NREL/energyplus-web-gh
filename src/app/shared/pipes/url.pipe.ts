import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'url'
})
export class UrlPipe implements PipeTransform {

  transform(tag: string): string {
    const url = new URL(tag.match(/href=(.[^>]+)/)[1]);
    return url.href;
  }

}
