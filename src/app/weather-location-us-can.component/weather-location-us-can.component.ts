import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherLocations } from '../shared/classes/weather';
import { Locations } from '../shared/classes/constants';

@Component({
  selector: 'app-weather-location-us-can',
  templateUrl: './weather-location-us-can.component.html',
  styleUrls: ['./weather-location-us-can.component.scss']
})

export class WeatherLocationUsCanComponent implements OnInit {
  @Input() location: Locations;
  @Input() state: string;

	constructor(private route: ActivatedRoute) {
    for (let location of WeatherLocations) {
      if (location['country'] == route.url['_value'][2].path) {
        if (location['title'] == route.url['_value'][3].path) {
          this.location = location;
        }
      }
    }

    if (this.location.state == "CA-Zones - California Climate Zones") {
      this.state = "California Climate Zones";
    } else {
      this.state = this.location.state.split(' ')[this.location.state.split(' ').length - 1]
    }

    if (this.location.country == 'CAN') {
      this.location.country = 'Canada';
    }
  }

  ngOnInit(): void {

  }
}
