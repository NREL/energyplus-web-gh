import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '@constants/country';
import { Region } from '@constants/region';
import { Weather, WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-location',
  templateUrl: './weather-location.component.html',
  styleUrls: ['./weather-location.component.scss']
})

export class WeatherLocationComponent implements OnInit {
  country: Country;
  region: Region;
  state?: string;
  location: Weather;

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
    const countries = this.weatherService.nestedWeather[this.region];
    if (!Object.keys(countries).includes(country)) {
      this.router.navigate(['/weather-region', region]);
      return;
    }
    this.country = country as Country;

    const state = this.route.snapshot.paramMap.get('state');

    let filteredLocations: Weather[];

    if (this.weatherService.countryHasStates(this.country)) {
      const states = new Set<string>();
      this.weatherService.nestedWeather[this.region][country].forEach(location => {
        states.add(location.data.state);
      });
      const validStates = Array.from(states);
      if (!state || !validStates.includes(state)) {
        this.router.navigate(['/weather-region', this.region, this.country]);
        return;
      }
      this.state = state;
      filteredLocations = this.weatherService.nestedWeather[this.region][country].filter(location => location.data.state === this.state);
    } else {
      if (state) {
        this.router.navigate(['/weather-region', this.region, this.country]);
        return;
      }
      filteredLocations = this.weatherService.nestedWeather[this.region][country];
    }

    const title = this.route.snapshot.paramMap.get('title');

    const match = filteredLocations.find(location => location.properties.title === title);
    if (!match) {
      if (this.state) {
        this.router.navigate(['/weather-region', this.region, this.country, this.state]);
      } else {
        this.router.navigate(['/weather-region', this.region, this.country]);
      }
      return;
    }

    this.location = match;
  }

}
