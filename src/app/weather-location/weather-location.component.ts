import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherRegions } from '../shared/classes/weather';
import { Regions, Countries, Locations } from '../shared/classes/constants';
import { WeatherLocations } from '../shared/classes/weather';

@Component({
  selector: 'app-weather-location',
  templateUrl: './weather-location.component.html',
  styleUrls: ['./weather-location.component.scss']
})

export class WeatherLocationComponent {

  @Input() region: Regions;
	@Input() weather_regions: Regions[] = WeatherRegions;
	@Input() weather_country: Countries;
	@Input() weather_locations: Locations[] = WeatherLocations;
	@Input() location: Locations;

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

		for (let location of this.weather_country['location']) {
			if (location['title'] == route.url['_value'][3]['path']) {
				this.location = location;
			}
		}
  }

}
