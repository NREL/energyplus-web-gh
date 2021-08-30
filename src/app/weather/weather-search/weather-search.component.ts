import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherRegions } from './../../shared/classes/weather';
import { Locations } from './../../shared/classes/constants';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']
})

export class WeatherSearchComponent{
	
	@Input() keyword: string;
	@Input() locations: Locations[] = [];
	@Input() total_results: Number = 0;

	constructor(private route: ActivatedRoute) {
		this.keyword = route.url['_value'][1].path;

		var locations = []
		var countries = []
		for (let region of WeatherRegions) {
			for (let country of region['countries']) {
				countries.push(country['name'])
				for (let location of country['locations']) {
					if (location['title'].toLowerCase().includes(this.keyword.toLowerCase())) {
						locations.push(location);
					}
				}
			}
		}
		this.locations = locations;
		this.total_results = this.locations.length;
	}
}
