import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
import { WeatherComponent } from './weather/weather-main/weather.component';
import { RecentReleaseComponent } from './shared/components/recent-release/recent-release.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { DownloadsComponent } from './downloads/downloads.component';
import { ReferencesComponent } from './references/references.component';
import { ReferenceItemComponent } from './shared/components/reference-item/reference-item.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { ContributingComponent } from './contributing/contributing.component';
import { WeatherSimulationComponent } from './weather/weather-simulation/weather-simulation.component';
import { WeatherSourcesComponent } from './weather/weather-sources/weather-sources.component';
import { WeatherRegionComponent } from './weather/weather-region/weather-region.component';
import { WeatherCountryComponent } from './weather/weather-country/weather-country.component';
import { WeatherLocationComponent } from './weather/weather-location/weather-location.component';
import { WeatherLocationUsCanComponent } from './weather/weather-location-us-can/weather-location-us-can.component';
import { WeatherSearchComponent } from './weather/weather-search/weather-search.component';
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
    WeatherSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faGithub, faExclamationTriangle, faArrowCircleRight, faBuilding, faTasks, faPenSquare, faPlayCircle, faClock, faChartPie, faChartBar, faFolderOpen, faFile);
  }
}
