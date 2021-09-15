import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faChartBar, faFile, faFolderOpen, faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowCircleRight,
  faCaretDown,
  faChartPie,
  faClock,
  faExclamationTriangle,
  faPenSquare,
  faTasks
} from '@fortawesome/free-solid-svg-icons';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { CountryPipe } from '@pipes/country.pipe';
import { PluralPipe } from '@pipes/plural.pipe';
import { RegionPipe } from '@pipes/region.pipe';
import { StatePipe } from '@pipes/state.pipe';
import { UrlPipe } from '@pipes/url.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContributingComponent } from './contributing/contributing.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InstallationComponent } from './installation/installation.component';
import { LicensingComponent } from './licensing/licensing.component';

import { NavbarComponent } from './navbar/navbar.component';
import { QuickStartComponent } from './quick-start/quick-start.component';
import { ReferenceComponent } from './reference/reference.component';
import { ReferencesComponent } from './references/references.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { SupportTrainingComponent } from './support-training/support-training.component';
import { WeatherCountryComponent } from './weather/weather-country/weather-country.component';
import { WeatherLocationComponent } from './weather/weather-location/weather-location.component';
import { WeatherComponent } from './weather/weather-main/weather.component';
import { WeatherRegionComponent } from './weather/weather-region/weather-region.component';
import { WeatherSearchComponent } from './weather/weather-search/weather-search.component';
import { WeatherSimulationComponent } from './weather/weather-simulation/weather-simulation.component';
import { WeatherSourcesComponent } from './weather/weather-sources/weather-sources.component';

@NgModule({
  declarations: [
    AppComponent,
    ContributingComponent,
    CountryPipe,
    DocumentationComponent,
    DownloadsComponent,
    FooterComponent,
    HomeComponent,
    InstallationComponent,
    LicensingComponent,
    NavbarComponent,
    PaginationComponent,
    PluralPipe,
    QuickStartComponent,
    ReferenceComponent,
    ReferencesComponent,
    RegionPipe,
    StatePipe,
    SupportTrainingComponent,
    UrlPipe,
    WeatherComponent,
    WeatherCountryComponent,
    WeatherLocationComponent,
    WeatherRegionComponent,
    WeatherSearchComponent,
    WeatherSimulationComponent,
    WeatherSourcesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    NgbCollapseModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(
      faArrowCircleRight,
      faBuilding,
      faCaretDown,
      faChartBar,
      faChartPie,
      faClock,
      faExclamationTriangle,
      faFile,
      faFolderOpen,
      faGithub,
      faPenSquare,
      faPlayCircle,
      faTasks
    );
  }
}
