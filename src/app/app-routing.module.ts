import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { QuickStartComponent } from './quick-start/quick-start.component';
import { SupportTrainingComponent } from './support-training/support-training.component';
import { LicensingComponent } from './licensing/licensing.component';
import { WeatherComponent } from './weather/weather-main/weather.component';
import { WeatherRegionComponent } from './weather/weather-region/weather-region.component';
import { WeatherCountryComponent } from './weather/weather-country/weather-country.component';
import { WeatherLocationUsCanComponent } from './weather/weather-location-us-can/weather-location-us-can.component';
import { WeatherSearchComponent } from './weather/weather-search/weather-search.component';
import { ReferencesComponent } from './references/references.component';
import { ReferenceTemplateComponent } from './references/reference/reference.component';
import { ContributingComponent } from './contributing/contributing.component';
import { WeatherSimulationComponent } from './weather/weather-simulation/weather-simulation.component';
import { WeatherSourcesComponent } from './weather/weather-sources/weather-sources.component';
import { WeatherLocationComponent } from './weather/weather-location/weather-location.component';
import { InstallationComponent } from './installation/installation.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'downloads',
  component: DownloadsComponent
}, {
  path: 'documentation',
  component: DocumentationComponent
}, {
  path: 'quick-start',
  component: QuickStartComponent
}, {
  path: 'support-training',
  component: SupportTrainingComponent
}, {
  path: 'licensing',
  component: LicensingComponent
}, {
  path: 'weather',
  component: WeatherComponent
}, {
  path: 'weather/simulation',
  component: WeatherSimulationComponent
}, {
  path: 'weather/sources',
  component: WeatherSourcesComponent
}, {
  path: 'weather-region/:region',
  component: WeatherRegionComponent
}, {
  path: 'weather-region/:region/:country',
  component: WeatherCountryComponent
}, {
  path: 'weather-region/:region/:country/:state',
  component: WeatherLocationComponent
}, {
  path: 'weather-region/:region/:country/:state/:location',
  component: WeatherLocationUsCanComponent
}, {
  path: 'weather-search/:keyword',
  component: WeatherSearchComponent
}, {
  path: 'references',
  component: ReferencesComponent
}, {
  path: 'reference/:id',
  component: ReferenceTemplateComponent
}, {
  path: 'contributing',
  component: ContributingComponent
}, {
  path: 'installation',
  component: InstallationComponent
}, {
  path: 'testing',
  component: TestingComponent
}, {
  path: '**',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
