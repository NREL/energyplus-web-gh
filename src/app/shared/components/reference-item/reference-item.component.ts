import { formatDate } from '@angular/common';
import { Component, Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReferenceItem } from '../../classes/constants';
import { references_1 } from '../../classes/reference_1';
import { references_2 } from '../../classes/reference_2';
import { references_3 } from '../../classes/reference_3';
import { references_4 } from '../../classes/reference_4';

@Component({
    selector: 'app-reference-item',
    templateUrl: './reference-item.component.html',
    styleUrls: ['./reference-item.component.scss']
})

export class ReferenceItemComponent implements OnInit {

  @Input() referenceItem: ReferenceItem
  @Input() sort: Boolean = true;
  @Input() image: any = "https://energyplus.net/misc/arrow-asc.png";
  @Input() isSelected: String = 'publication_date';

  readonly references = references_1.concat(references_2, references_3, references_4);
  readonly resultsPerPage = 30;

  page = 1;
  totalPages = Math.ceil((this.references.length) / this.resultsPerPage) || 1;

  public reference: any[] = this.references.sort((a, b) => (formatDate(a.publication_date, 'MM-dd-yy', 'en_US') < formatDate(b.publication_date, 'MM-dd-yy', 'en_US') ? 1 : -1)).reduce((arr, item, i) => {
    return i % this.resultsPerPage === 0 ? [...arr, [item]] : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, []);

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      const { page } = params;
      if (/^\d+$/.test(page) && Number(page) > 0) {
        this.page = Math.min(Number(page), this.totalPages);
      } else {
        this.page = 1;
      }
    });
  }

  ngOnInit(): void {
    if (!this.reference) {
      throw new Error('ReferenceItemComponent attribute "reference" is required');
    }
  }

  onClickSort(sort_by: string): void {
    this.sort = !this.sort;

    // TODO: move image out of energyplus.net
    if (this.sort) {
      this.image = "https://energyplus.net/misc/arrow-asc.png";
    } else {
      this.image = "https://energyplus.net/misc/arrow-desc.png"
    }
  
    this.isSelected = sort_by;
    if (sort_by === 'title') {
      this.references.sort((a, b) => (this.sort? (a.title < b.title ? 1 : -1) : (a.title < b.title ? -1 : 1)));
    } else if (sort_by === 'authors') {
      // TODO: empty authors sort.
      this.references.sort((a, b) => (this.sort ? (a.authors < b.authors ? 1 : -1) : (a.authors < b.authors ? -1 : 1)));
    } else if (sort_by === 'research_org') {
      this.references.sort((a, b) => (this.sort ? (a.research_org < b.research_org ? 1 : -1) : (a.research_org < b.research_org ? -1 : 1)));
    } else if (sort_by === 'publication_date') {
      this.references.sort((a, b) => (this.sort ? (formatDate(a.publication_date, 'MM-dd-yy', 'en_US') < formatDate(b.publication_date, 'MM-dd-yy', 'en_US') ? 1 : -1) : (formatDate(a.publication_date, 'MM-dd-yy', 'en_US') < formatDate(b.publication_date, 'MM-dd-yy', 'en_US') ? -1 : 1)));
    } else if (sort_by === 'osti_id') {
      this.references.sort((a, b) => (this.sort ? (Number(a.osti_id) < Number(b.osti_id) ? 1 : -1) : (Number(a.osti_id) < Number(b.osti_id) ? -1 : 1)));
    } else if (sort_by === 'doi') {
      this.references.sort((a, b) => (this.sort ? (a.doi < b.doi ? 1 : -1) : (a.doi < b.doi ? -1 : 1)));
    } else if (sort_by === 'url') {
      this.references.sort((a, b) => (this.sort ? (a.url < b.url ? 1 : -1) : (a.url < b.url ? -1 : 1)));
    } else {
      throw new Error('Unknow header for sort.')
    }

    this.reference = this.references.reduce((arr, item, i) => {
      return i % this.resultsPerPage === 0 ? [...arr, [item]] : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
    }, []);
  }

}
