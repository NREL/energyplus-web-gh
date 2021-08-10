import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherRegions } from '../shared/classes/weather';
import { Regions, Countries, Locations } from '../shared/classes/constants';

@Component({
  selector: 'app-weather-location',
  templateUrl: './weather-location.component.html',
  styleUrls: ['./weather-location.component.scss']
})

export class WeatherLocationComponent {

  @Input() region: Regions;
	@Input() country: Countries;
	@Input() state: string;
	@Input() location: Locations;
	@Input() us_state: string;
	@Input() can_state: string;
	@Input() us_states: Locations[] = [];
	@Input() can_states: Locations[] = [];

  constructor(private route: ActivatedRoute) {
    for (let region of WeatherRegions) {
      if (region['region'] == route.url['_value'][1].path) {
        this.region = region;
      }
		}

		for (let country of this.region['countries']) {
			if (country['acronym'] == route['url']['_value'][2]['path'] || country['name'] == route.url['_value'][2]['path']) {
				this.country = country;
			}
		}

		if (this.country.acronym == 'USA') {
			this.us_state = route.url['_value'][3].path;

			for (let location of this.country['location']) {
				if (location['state'].split(' - ')[0] == this.us_state || location['state'].split(' - ')[1] == this.us_state || location['state'] == this.us_state || location['state'].split(' ')[location['state'].split(' ').length - 1] == this.us_state) {
					this.us_states.push(location);
				}
			}

			if (this.us_state == 'CA-Zones' || this.us_state == 'California Climate Zones') {
				this.us_state = "California Climate Zones";
			} else {
				var length = this.us_state.split(' ').length;
				this.us_state = this.us_state.split(' ')[length - 1];
			}

		} else if (this.country.acronym == 'CAN') {
			this.can_state = route.url['_value'][3].path;
			for (let location of this.country['location']) {
				if (location['state'] == this.can_state || location['state'].split(' ')[location['state'].split(' ').length - 1] == this.can_state) {
					this.can_states.push(location);
				}
			}

			var length = this.can_state.split(' ').length;
			this.can_state = this.can_state.split(' ')[length - 1];

		} else {
			for (let location of this.country['location']) {
				if (location['title'] == route.url['_value'][3].path) {
					this.location = location;
				}
			}
		}
  }

}
