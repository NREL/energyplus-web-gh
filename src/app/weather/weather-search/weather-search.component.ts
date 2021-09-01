import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Locations } from './../../shared/classes/constants';
import { WeatherRegions } from './../../shared/classes/weather';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']
})

export class WeatherSearchComponent {

  @Input() keyword: string;
  @Input() locations: Locations[] = [];
  @Input() total_results = 0;

  constructor(private route: ActivatedRoute) {
    route.url.subscribe(values => {

      this.keyword = values[1].path;
      const locations = [];
      const countries = [];
      for (const region of WeatherRegions) {
        for (const country of region.countries) {
          countries.push(country.name);
          for (const location of country.locations) {
            if (location.title.toLowerCase().includes(this.keyword.toLowerCase())) {
              locations.push(location);
            }
          }
        }
      }
      this.locations = locations;
      this.total_results = this.locations.length;

    });
    
  }
}
