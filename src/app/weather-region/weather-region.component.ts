import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherRegions } from '../shared/classes/weather';
import { Regions } from '../shared/classes/constants';

@Component({
  selector: 'app-weather-region',
  templateUrl: './weather-region.component.html',
  styleUrls: ['./weather-region.component.scss']
})

export class WeatherRegionComponent {

  @Input() weather: Regions;
  @Input() weather_regions: Regions[] = WeatherRegions;

  constructor(private route: ActivatedRoute) {
    for (let i of this.weather_regions) {
      if (i['region'] == route.url['_value'][1].path) {
        this.weather = i;
      }
    }
  }
}
