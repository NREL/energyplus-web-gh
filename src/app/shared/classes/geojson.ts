import { Injectable } from '@angular/core';
import { Weather } from '../../weather/weather.service';

@Injectable({
  providedIn: 'root'
})
export class GeoJSON {
  type: 'FeatureCollection';
  features: Weather[];
}
