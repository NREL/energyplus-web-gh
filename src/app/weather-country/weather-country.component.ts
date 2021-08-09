import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherRegions } from '../shared/classes/weather';
import { Regions, Countries } from '../shared/classes/constants';

@Component({
  selector: 'app-weather-country',
  templateUrl: './weather-country.component.html',
  styleUrls: ['./weather-country.component.scss']
})

export class WeatherCountryComponent {

  @Input() region: Regions;
  @Input() weather_regions: Regions[] = WeatherRegions;
  @Input() weather_country: Countries;

  constructor(private route: ActivatedRoute) {
    for (let region of this.weather_regions) {
      if (region['region'] == route.url['_value'][1].path) {
        this.region = region;
      }
		}

		for (let country of this.region['countries']) {
			if (country['acronym'] == route['url']['_value'][2]['path']) {
        this.weather_country = country;
			}
    }
  }

}
