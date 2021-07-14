import { Component, OnInit, Input } from '@angular/core';
import { ReleaseItem } from '../../classes/constants';

@Component({
  selector: 'app-recent-release',
  templateUrl: './recent-release.component.html',
  styleUrls: ['./recent-release.component.scss']
})

export class RecentReleaseComponent implements OnInit {
  @Input() release: ReleaseItem;

  ngOnInit(): void {
    if (!this.release){
      throw new Error('RecentReleaseComponent attribute "release" is required')
    }
  }
}
