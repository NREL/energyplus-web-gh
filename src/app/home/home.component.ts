import { Component } from '@angular/core';
import { latestRelease } from './../shared/classes/releases';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
	readonly latestRelease = latestRelease;
	
  constructor() {
  }

}
