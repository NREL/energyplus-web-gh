import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { WeatherService } from './weather.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherResolver implements Resolve<boolean> {
  constructor(private weatherService: WeatherService) {
  }

  resolve(): Promise<true> {
    return new Promise(resolve => {
      this.weatherService.weatherLoaded$
        .pipe(takeWhile(weatherLoaded => !weatherLoaded, true))
        .subscribe(weatherLoaded => {
          if (weatherLoaded) {
            resolve(true);
          }
        });
    });
  }
}
