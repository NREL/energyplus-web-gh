import { Component } from '@angular/core';
import { ReleaseItem } from '@classes/constants';
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
  readonly releaseGroups = this.buildReleaseGroups()

  constructor(private googleAnalyticsService: GoogleAnalyticsService) {
  }

  trackDownload(platform: 'windows' | 'mac' | 'linux', linkUrl: string) {
    this.googleAnalyticsService.downloadEvent(platform, linkUrl);
  }

  naturalSort({key: a}: { key: string; value: ReleaseItem[] }, {key: b}: { key: string; value: ReleaseItem[] }): number {
    return a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: 'base'
    });
  }

  private buildReleaseGroups(): Record<string, ReleaseItem[]> {
    const groups: Record<string, ReleaseItem[]> = {}
    for (const release of this.releases) {
      const match = release.version.match(/^EnergyPlus (\d+)\.\d+\.\d+$/);
      const version = Number(match[1]);
      groups[version] = groups[version] ?? [];
      groups[version].push(release);
    }
    return groups;
  }
}
