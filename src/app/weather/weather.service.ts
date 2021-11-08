import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeoJSON } from '@classes/geojson';
import { Country } from '@constants/country';
import { allRegions, Region } from '@constants/region';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

export interface Weather {
  type: 'Feature';
  properties: {
    title: string,
    epw: string,
    ddy: string,
    stat: string,
    mos?: string,
    txt?: string,
    all: string,
    dir: string
  };
  geometry: {
    type: 'Point',
    coordinates: [number, number]
  };
  data?: {
    name: string,
    region: Region,
    country: Country,
    state?: string
  };
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  stats = {
    total: 0,
    usa: 0,
    canada: 0,
    totalCountries: 0
  };

  private _weatherLoadedSubject = new BehaviorSubject(false);
  readonly weatherLoaded$ = this._weatherLoadedSubject.asObservable().pipe(distinctUntilChanged());

  constructor(
    private httpClient: HttpClient,
    private geojson: GeoJSON
  ) {
    if (geojson.features) {
      this._initialize(geojson);
    } else {
      this.httpClient.get<GeoJSON>('assets/weather/master.geojson').toPromise().then(geojson => {
        this._initialize(geojson);
      }).catch(error => {
        console.error('Failed to load geojson', error);
      });
    }
  }

  private _nestedWeather: {
    [region: string]: {
      [country: string]: Weather[];
    }
  } = {};

  get nestedWeather(): { [region: string]: { [country: string]: Weather[] } } {
    return this._nestedWeather;
  }

  private _weather: Weather[];

  get weather(): Weather[] {
    return this._weather;
  }

  validRegion(region: string): boolean {
    return allRegions.includes(region as Region);
  }

  validCountry(region: Region, country: string): boolean {
    return country in this._nestedWeather[region];
  }

  countryHasStates(country: Country): boolean {
    return ['USA', 'CAN'].includes(country);
  }

  private _initialize(geojson: GeoJSON) {
    this._weather = geojson.features;
    this._initializeStats();
    this._weatherLoadedSubject.next(true);
  }

  private _initializeStats(): void {
    const countries = new Set<Country>();
    this.stats.total = this._weather.length;
    this._weather.forEach(weatherData => {
      const url = new URL(weatherData.properties.epw.match(/href=(.[^>]+)/)[1]);
      const path = url.pathname.substr(1).split('/').slice(0, -1);
      const region = path[0] as Region;
      const country = path[1] as Country;
      const location = path.pop();

      if (country === 'USA') {
        ++this.stats.usa;
      } else if (country === 'CAN') {
        ++this.stats.canada;
      }
      countries.add(country);

      weatherData.data = {name: '', region, country};
      if (this.countryHasStates(country)) {
        weatherData.data.state = path[path.length - 1];
      }
      if (path[path.length - 1] === 'CA-Zones') {
        weatherData.data.name = location;
      } else {
        const locationSegments = location.split('_');
        const ext = locationSegments.pop();
        const state = locationSegments.pop();
        weatherData.data.name = `${state.replace(/\./g, ' ')} (${ext})`;

        if (ext === 'IWEC') {
          weatherData.properties.txt = url.href.substr(0, url.href.lastIndexOf('/')) + '/ASHRAE_Copyright_and_IWEC_License.txt';
        } else if (ext === 'INETI' && weatherData.properties.title === 'PRT_Funchal.Madeira-Islands.085210_INETI') {
          weatherData.properties.txt = url.href.substr(0, url.href.lastIndexOf('/')) + '/INETI_Synthetic_Data_Copyright_and_Disclaimer.txt';
        }
      }

      if (!this._nestedWeather[region]) {
        this._nestedWeather[region] = {};
      }
      if (!this._nestedWeather[region][country]) {
        this._nestedWeather[region][country] = [weatherData];
      } else {
        this._nestedWeather[region][country].push(weatherData);
      }

    });
    this.stats.totalCountries = countries.size;
  }
}
