import { Component, Input, OnInit, Output } from '@angular/core';
import { WeatherRegions } from '../shared/classes/weather';
import { Regions } from '../shared/classes/constants';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})

export class WeatherComponent {

  @Input() weather: Regions;
  @Input() weather_regions: Regions[] = WeatherRegions;

  constructor() {
  }

  ngOnInit(): void {
    if (!this.weather_regions) {
      throw new Error('ReferenceItemComponent attribute "weather_regions" is required');
		}
  }

}
