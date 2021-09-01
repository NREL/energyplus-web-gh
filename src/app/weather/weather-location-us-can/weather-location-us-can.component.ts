import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Locations } from '../../shared/classes/constants';
import { WeatherRegions } from '../../shared/classes/weather';

@Component({
  selector: 'app-weather-location-us-can',
  templateUrl: './weather-location-us-can.component.html',
  styleUrls: ['./weather-location-us-can.component.scss']
})

export class WeatherLocationUsCanComponent implements OnInit {
  @Input() location: Locations;
  @Input() state_name: string;
  @Input() state_route: string;
  @Input() weather_locations: Locations[];
  @Input() country: string;

  constructor(private route: ActivatedRoute) {
    route.url.subscribe(values => {
      let weather_locations = [];

      for (const region of WeatherRegions) {
        if (region.region === 'north_and_central_america_wmo_region_4') {
          for (const country of region.countries) {
            if (country.acronym === 'USA' || country.acronym === 'CAN') {
              weather_locations = weather_locations.concat(country.locations);
            }
          }
        }
      }

      for (const location of weather_locations) {
        if (location.title == values[3].path || location.title == values[4].path) {
          this.location = location;
        }
      }

      this.state_route = this.location.state_route;
      this.state_name = this.location.state_name;
      if (this.location.country == 'CAN') {
        this.country = 'Canada';
      } else {
        this.country = this.location.country;
      }
    });

  }

  ngOnInit(): void {
    if (!this.location) {
      throw new Error('WeatherLocationUsCanComponent attribute "locations" is required.');
    }

  }
}
