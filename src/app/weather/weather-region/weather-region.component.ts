import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Regions } from '../../shared/classes/constants';
import { WeatherRegions } from '../../shared/classes/weather';

@Component({
  selector: 'app-weather-region',
  templateUrl: './weather-region.component.html',
  styleUrls: ['./weather-region.component.scss']
})

export class WeatherRegionComponent implements OnInit {

  @Input() region: Regions;

  constructor(private route: ActivatedRoute) {
    for (const region of WeatherRegions) {
      if (region.region == route.url._value[1].path) {
        this.region = region;
      }
    }
  }

  ngOnInit(): void {
    if (!this.region) {
      throw new Error('WeatherRegionComponent attribute "region" is required');
    }
  }
}
