import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { allRegions } from '@constants/region';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})

export class WeatherComponent {
  readonly allRegions = allRegions;
  keyword: FormControl;

  constructor(
    public weatherService: WeatherService,
    private router: Router
  ) {
    this.keyword = new FormControl('', [Validators.required]);
  }

  floor(i: number): number {
    return Math.floor(i / 10) * 10;
  }

  search(keyword: string): void {
    this.router.navigate(['/weather-search', keyword.trim()]);
  }
}
