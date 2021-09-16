import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reference } from '@classes/constants';
import { references } from '@classes/reference';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})

export class ReferenceComponent implements OnInit {

  reference!: Reference;
  private id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!/^\d+$/.test(id)) {
      this.router.navigate(['/references']);
      return;
    }
    this.id = Number(id);

    const match = references.find(reference => reference.id === this.id);
    if (!match) {
      this.router.navigate(['/references']);
      return;
    }
    this.reference = match;
  }

}
