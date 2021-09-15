import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '@constants/country';
import { Region } from '@constants/region';
import { Weather, WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-country',
  templateUrl: './weather-country.component.html',
  styleUrls: ['./weather-country.component.scss']
})

export class WeatherCountryComponent implements OnInit {
  country: Country;
  region: Region;
  state?: string;
  states?: string[];
  locations?: Weather[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private weatherService: WeatherService
  ) {
  }

  ngOnInit(): void {
    const region = this.route.snapshot.paramMap.get('region');
    if (!this.weatherService.validRegion(region)) {
      this.router.navigate(['/weather']);
      return;
    }
    this.region = region as Region;

    const country = this.route.snapshot.paramMap.get('country');
    if (!this.weatherService.validCountry(this.region, country)) {
      this.router.navigate(['/weather-region', this.region]);
      return;
    }
    this.country = country as Country;

    const state = this.route.snapshot.paramMap.get('state');

    if (this.weatherService.countryHasStates(this.country)) {
      const states = new Set<string>();
      this.weatherService.nestedWeather[this.region][country].forEach(location => {
        states.add(location.data.state);
      });
      this.states = Array.from(states);
      if (state) {
        if (!this.states.includes(state)) {
          this.router.navigate(['/weather-region', this.region, this.country]);
          return;
        }
        this.state = state;
        this.locations = this.weatherService.nestedWeather[this.region][country].filter(location => location.data.state === this.state);
      }
    } else {
      if (state) {
        this.router.navigate(['/weather-region', this.region, this.country]);
        return;
      }
      this.locations = this.weatherService.nestedWeather[this.region][country];
    }
  }
}
