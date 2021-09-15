import { Pipe, PipeTransform } from '@angular/core';
import { Region, Regions } from '@constants/region';
import { WeatherService } from '../../weather/weather.service';

@Pipe({
  name: 'region'
})
export class RegionPipe implements PipeTransform {
  constructor(private weatherService: WeatherService) {
  }

  transform(region: Region): string {
    return Regions[region];
  }

}
