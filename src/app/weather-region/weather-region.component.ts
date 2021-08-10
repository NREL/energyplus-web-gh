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

  constructor(private route: ActivatedRoute) {
    for (let region of WeatherRegions) {
      if (region['region'] == route.url['_value'][1].path) {
        this.weather = region;
      }
    }
  }
}
