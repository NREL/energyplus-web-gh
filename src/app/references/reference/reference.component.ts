import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReferenceItem } from '../../shared/classes/constants';
import { references } from '../../shared/classes/reference';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})

export class ReferenceTemplateComponent implements OnInit {

  @Input() reference_item: ReferenceItem;
  @Input() reference: any[] = references;
  @Input() day: string;
  @Input() date: string;
  @Input() time: string;

  constructor(private route: ActivatedRoute) {
    route.url.subscribe(values => {
      const time = new Date();
      this.day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][time.getDay()];
      this.date = time.getMonth() + 1 + '/' + time.getDate() + '/' + time.getFullYear();
      this.time = time.getHours() + ':' + ('0' + time.getMinutes()).slice(-2);

      for (const reference of this.reference) {
        if (reference.id == values[1].path) {
          this.reference_item = reference;
        }
      }
    });
  }

  ngOnInit(): void {
    if (!this.reference_item) {
      throw new Error('ReferenceTemplateComponent attribute "reference_item" is required');
    }
  }

}
