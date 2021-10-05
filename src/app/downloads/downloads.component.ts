import { Component } from '@angular/core';
import { latestRelease, releases } from '@classes/releases';
import { GoogleAnalyticsService } from '../shared/services/google-analytics.service';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss']
})
export class DownloadsComponent {
  readonly releases = releases;
  readonly latestRelease = latestRelease;

  constructor(private googleAnalyticsService: GoogleAnalyticsService) {
  }

  trackDownload(platform: 'windows' | 'mac' | 'linux', linkUrl: string) {
    this.googleAnalyticsService.downloadEvent(platform, linkUrl);
  }

}
