import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { QuickStartComponent } from './quick-start/quick-start.component';
import { SupportTrainingComponent } from './support-training/support-training.component'
import { LicensingComponent } from './licensing/licensing.component';
import { WeatherComponent } from './weather/weather.component';
import { RecentReleaseComponent } from './shared/components/recent-release/recent-release.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { DownloadsComponent } from './downloads/downloads.component';
import { ReferencesComponent } from './references/references.component';
import { ReferenceItemComponent } from './shared/components/reference-item/reference-item.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { ContributingComponent } from './contributing/contributing.component';
import { WeatherSimulationComponent } from './weather-simulation/weather-simulation.component';
import { WeatherSourcesComponent } from './weather-sources/weather-sources.component';
import { WeatherRegionComponent } from './weather-region/weather-region.component';
import { WeatherCountryComponent } from './weather-country/weather-country.component';
import { WeatherLocationComponent } from './weather-location/weather-location.component';
import { WeatherLocationUsCanComponent } from './weather-location-us-can.component/weather-location-us-can.component';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-regular-svg-icons';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    DocumentationComponent,
    QuickStartComponent,
    SupportTrainingComponent,
    LicensingComponent,
    WeatherComponent,
    RecentReleaseComponent,
    DownloadsComponent,
    ReferencesComponent,
    ReferenceItemComponent,
    PaginationComponent,
    ContributingComponent,
    WeatherSimulationComponent,
    WeatherSourcesComponent,
    WeatherRegionComponent,
    WeatherCountryComponent,
    WeatherLocationComponent,
    WeatherLocationUsCanComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faGithub, faExclamationTriangle, faArrowCircleRight, faBuilding, faTasks, faPenSquare, faPlayCircle, faClock, faChartPie, faChartBar, faFolderOpen, faFile);
  }
}
