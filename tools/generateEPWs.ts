import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import { GeoJSON } from '@classes/geojson';
import { Country } from '@constants/country';
import { allRegions } from '@constants/region';
import { CountryPipe } from '@pipes/country.pipe';
import { StatePipe } from '@pipes/state.pipe';
import { UrlPipe } from '@pipes/url.pipe';
import * as fs from 'fs';
import * as path from 'path';
import { WeatherService } from '../src/app/weather/weather.service';

const XMLHttpRequest = require('xhr2');

const geojson: GeoJSON = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../src/assets/weather/master.geojson'), 'utf8'));

const httpClient = new HttpClient(new HttpXhrBackend({build: () => new XMLHttpRequest()}));
const weatherService = new WeatherService(httpClient, geojson);
const countryPipe = new CountryPipe();
const statePipe = new StatePipe();
const urlPipe = new UrlPipe();

let rows: string[] = [];

const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
let usaFound = false;
let caZoneRows: string[] = [];

allRegions.forEach(region => {
  const formattedRegion = regions(region);

  let countries = Object.keys(weatherService.nestedWeather[region]);
  if (region === 'north_and_central_america_wmo_region_4') {
    // Custom order
    countries = ['USA', 'CAN', ...countries.filter(country => !['USA', 'CAN'].includes(country))];
  }
  countries.forEach(country => {
    // Place CA-Zones at the end of USA
    if (country === 'USA') {
      usaFound = true;
    }
    if (usaFound && country !== 'USA') {
      usaFound = false;
      rows = rows.concat(...caZoneRows);
    }

    const countryRows: string[] = [];
    weatherService.nestedWeather[region][country].forEach(location => {
      let formattedCountry: string;
      if (country === 'CAN') {
        formattedCountry = countryPipe.transform(country);
      } else if (country === 'USA') {
        if (location.data.state === 'CA-Zones') {
          formattedCountry = statePipe.transform(location.data.state, country);
        } else {
          formattedCountry = countryPipe.transform(country);
        }
      } else {
        formattedCountry = `${country} - ${countryPipe.transform(country as Country)}`;
      }

      let formattedLocation = location.data.name;
      if (location.data.state && !(country === 'USA' && location.data.state === 'CA-Zones')) {
        formattedLocation = `${statePipe.transform(location.data.state, country as Country)} - ${formattedLocation}`;
      }

      const row = `${formattedRegion},${formattedCountry},${formattedLocation},${urlPipe.transform(location.properties.all)}`;
      if (country === 'USA' && location.data.state === 'CA-Zones') {
        caZoneRows.push(row);
      } else {
        countryRows.push(row);
      }
    });
    // Natural sort each country's records
    rows.push(...countryRows.sort(collator.compare));
  });
});

fs.mkdirSync(path.resolve(__dirname, '../dist'), {recursive: true});
const outputFile = path.resolve(__dirname, '../dist/EPWs.csv');
fs.writeFileSync(outputFile, rows.join('\r\n'));
console.log(`EPWs.csv saved to ${outputFile}`);

function regions(region: string): string {
  return {
    africa_wmo_region_1: 'Africa',
    asia_wmo_region_2: 'Asia',
    south_america_wmo_region_3: 'South America',
    north_and_central_america_wmo_region_4: 'North and Central America',
    southwest_pacific_wmo_region_5: 'Southwest Pacific',
    europe_wmo_region_6: 'Europe'
  }[region];
}
