import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Countries, Locations, Regions } from '../../shared/classes/constants';
import { WeatherRegions } from '../../shared/classes/weather';

@Component({
  selector: 'app-weather-location',
  templateUrl: './weather-location.component.html',
  styleUrls: ['./weather-location.component.scss']
})

export class WeatherLocationComponent implements OnInit {

  @Input() region: Regions;
  @Input() country: Countries;
  @Input() state: string;
  @Input() location: Locations;
  @Input() us_state: string;
  @Input() can_state: string;
  @Input() us_states: Locations[] = [];
  @Input() can_states: Locations[] = [];
  @Input() state_route: string;
  @Input() state_name: string;

  constructor(private route: ActivatedRoute) {
    for (const region of WeatherRegions) {
      if (region.region == route.url._value[1].path) {
        this.region = region;
      }
    }

    for (const country of this.region.countries) {
      if (country.acronym == route.url._value[2].path || country.name == route.url._value[2].path) {
        this.country = country;
      }
    }

    if (this.country.acronym == 'USA') {
      const us_state = route.url._value[3].path;

      for (const location of this.country.locations) {
        if (location.state_route == us_state || location.state_name == us_state) {
          this.state_route = location.state_route;
          this.us_state = location.state_name;
          this.us_states.push(location);
        }
      }
    } else if (this.country.acronym == 'CAN') {
      const can_state = route.url._value[3].path;

      for (const location of this.country.locations) {
        if (location.state_route == can_state || location.state_name == can_state) {
          this.state_route = location.state_route;
          this.can_state = location.state_name;
          this.can_states.push(location);
        }
      }
    } else {
      for (const location of this.country.locations) {
        if (location.title == route.url._value[3].path) {
          this.location = location;
        }
      }
    }
  }

  ngOnInit(): void {
    if (!this.location && !this.us_states && !this.can_states) {
      throw new Error('WeatherLocationComponent attribute "location" or "us_states" or "can_states" is required.');
    }
  }

}
