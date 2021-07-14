import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { QuickStartComponent } from './quick-start/quick-start.component';
import { SupportTrainingComponent } from './support-training/support-training.component';
import { LicensingComponent } from './licensing/licensing.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherRegionComponent } from './weather-region/weather-region.component';
import { ReferencesComponent } from './references/references.component';

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
  path: 'weather-region',
  component: WeatherRegionComponent
}, {
  path: 'references',
  component: ReferencesComponent
}, {
  path: '**',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
