import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '@constants/country';
import { Region } from '@constants/region';
import { Weather, WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-region',
  templateUrl: './weather-region.component.html',
  styleUrls: ['./weather-region.component.scss']
})

export class WeatherRegionComponent implements OnInit {
  region: Region;
  countries: Country[];

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
    this.countries = Object.keys(this.weatherService.nestedWeather[this.region]) as Country[];
  }
}
