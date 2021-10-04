import { Component } from '@angular/core';
import { GoogleAnalyticsService } from '../google-analytics.service';
import { releases, latestRelease } from './../shared/classes/releases';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss']
})
export class DownloadsComponent {
  readonly releases = releases;
  readonly latestRelease = latestRelease;

  constructor( public googleAnalyticsService: GoogleAnalyticsService ) { }

  trackDownload(platform){ 
    this
    .googleAnalyticsService
    .eventEmitter("download", "download", "energyplus", platform, 0);
  } 

}
