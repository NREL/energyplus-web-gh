import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContributingComponent } from './contributing/contributing.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { HomeComponent } from './home/home.component';
import { InstallationComponent } from './installation/installation.component';
import { LicensingComponent } from './licensing/licensing.component';
import { QuickStartComponent } from './quick-start/quick-start.component';
import { ReferenceComponent } from './reference/reference.component';
import { ReferencesComponent } from './references/references.component';
import { SupportTrainingComponent } from './support-training/support-training.component';
import { WeatherCountryComponent } from './weather/weather-country/weather-country.component';
import { WeatherLocationComponent } from './weather/weather-location/weather-location.component';
import { WeatherComponent } from './weather/weather-main/weather.component';
import { WeatherRegionComponent } from './weather/weather-region/weather-region.component';
import { WeatherSearchComponent } from './weather/weather-search/weather-search.component';
import { WeatherSimulationComponent } from './weather/weather-simulation/weather-simulation.component';
import { WeatherSourcesComponent } from './weather/weather-sources/weather-sources.component';
import { WeatherResolver } from './weather/weather.resolver';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'contributing',
  component: ContributingComponent
}, {
  path: 'documentation',
  component: DocumentationComponent
}, {
  path: 'downloads',
  component: DownloadsComponent
}, {
  path: 'installation',
  component: InstallationComponent
}, {
  path: 'licensing',
  component: LicensingComponent
}, {
  path: 'quick-start',
  component: QuickStartComponent
}, {
  path: 'reference/:id',
  component: ReferenceComponent
}, {
  path: 'references',
  component: ReferencesComponent
}, {
  path: 'support-training',
  component: SupportTrainingComponent
}, {
  path: 'weather',
  component: WeatherComponent,
  resolve: {
    weatherLoaded: WeatherResolver
  }
}, {
  path: 'weather/simulation',
  component: WeatherSimulationComponent
}, {
  path: 'weather/sources',
  component: WeatherSourcesComponent
}, {
  path: 'weather-location/:region/:country/:title',
  component: WeatherLocationComponent,
  resolve: {
    weatherLoaded: WeatherResolver
  }
}, {
  path: 'weather-location/:region/:country/:state/:title',
  component: WeatherLocationComponent,
  resolve: {
    weatherLoaded: WeatherResolver
  }
}, {
  path: 'weather-region/:region',
  component: WeatherRegionComponent,
  resolve: {
    weatherLoaded: WeatherResolver
  }
}, {
  path: 'weather-region/:region/:country',
  component: WeatherCountryComponent,
  resolve: {
    weatherLoaded: WeatherResolver
  }
}, {
  path: 'weather-region/:region/:country/:state',
  component: WeatherCountryComponent,
  resolve: {
    weatherLoaded: WeatherResolver
  }
}, {
  path: 'weather-search/:keyword',
  component: WeatherSearchComponent,
  resolve: {
    weatherLoaded: WeatherResolver
  }
}, {
  path: '**',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollOffset: [0, 16],
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
