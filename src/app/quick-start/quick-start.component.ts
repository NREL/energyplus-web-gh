import { Component } from '@angular/core';
import { latestRelease } from './../shared/classes/releases';

@Component({
  selector: 'app-quick-start',
  templateUrl: './quick-start.component.html',
  styleUrls: ['./quick-start.component.scss']
})

export class QuickStartComponent {
	readonly latestRelease = latestRelease;

  constructor() {
  }

}
