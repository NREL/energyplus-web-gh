import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {
  downloadEvent(
    platform: 'windows' | 'mac' | 'linux',
    linkUrl: string
  ): void {
    gtag('event', 'download', {
      platform,
      linkUrl
    });
  }
}
