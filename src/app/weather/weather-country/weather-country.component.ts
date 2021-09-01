import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Countries, Regions } from '../../shared/classes/constants';
import { WeatherLocations, WeatherRegions } from '../../shared/classes/weather';

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
    route.url.subscribe(values => {
      for (const region of WeatherRegions) {
        if (region.region == values[1].path) {
          this.region = region;
        }
      }

      for (const country of this.region.countries) {
        if (country.acronym == values[2].path || country.name == values[2].path) {
          this.country = country;
        }
      }

      for (const location of WeatherLocations) {
        if (location.state_route != '' && location.state_name != '' && location.state_route != 'CA-Zones' && location.state_name != 'California Climate Zones' && location.country == this.country.acronym) {
          this.states.push({state_route: location.state_route, state_name: location.state_name});
        }
      }
      this.states = this.states.filter((value, index, array) => !array.filter((v, i) => JSON.stringify(value) == JSON.stringify(v) && i < index).length);
    });
  }

  ngOnInit(): void {
    if (!this.states) {
      throw new Error('WeatherCountryComponent attribute "states" is required.');
    }

  }
}
