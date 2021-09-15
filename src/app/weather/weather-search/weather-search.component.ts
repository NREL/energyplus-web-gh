import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Weather, WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']
})

export class WeatherSearchComponent implements OnInit {
  keyword: string;
  locations: Weather[];
  totalResults: number;

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {
  }

  ngOnInit(): void {
    this.keyword = this.route.snapshot.paramMap.get('keyword');

    const searchKeyword = this.keyword.toLowerCase();
    const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
    const locations = this.weatherService.weather.filter(location => location.data.name.toLowerCase().includes(searchKeyword));
    this.locations = locations.sort((a, b) => collator.compare(a.data.name, b.data.name));

    this.totalResults = this.locations.length;
  }
}
