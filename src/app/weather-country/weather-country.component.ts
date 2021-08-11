import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherRegions, WeatherLocations } from '../shared/classes/weather';
import { Regions, Countries } from '../shared/classes/constants';

@Component({
  selector: 'app-weather-country',
  templateUrl: './weather-country.component.html',
  styleUrls: ['./weather-country.component.scss']
})

export class WeatherCountryComponent implements OnInit {

  @Input() region: Regions;
  @Input() country: Countries;
  @Input() states: any[] = [];

  constructor(private route: ActivatedRoute) {
    for (let region of WeatherRegions) {
      if (region['region'] == route.url['_value'][1].path) {
        this.region = region;
      }
		}

		for (let country of this.region['countries']) {
			if (country['acronym'] == route.url['_value'][2].path || country['name'] == route.url['_value'][2].path) {
        this.country = country;
			}
    }

    for (let location of WeatherLocations) {
      if (location['state_route'] != "" && location['state_name'] != "" && location['state_route']!= "CA-Zones" && location['state_name'] != "California Climate Zones" && location['country'] == this.country.acronym) {
        this.states.push({state_route: location['state_route'], state_name: location['state_name']});
      }
    }
    this.states = this.states.filter((value, index, array) => !array.filter((v, i) => JSON.stringify(value) == JSON.stringify(v) && i < index).length);
  }

  ngOnInit(): void {
    if (!this.states) {
      throw new Error('WeatherCountryComponent attribute "states" is required.');
    }

  }
}
