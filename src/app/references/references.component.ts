import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reference } from '@classes/constants';
import { references } from '@classes/reference';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})

export class ReferencesComponent {

  sort = true;
  image = 'assets/images/arrow-asc.png';
  isSelected = 'publication_date';

  readonly references = references;
  readonly resultsPerPage = 30;

  page = 1;
  totalPages = Math.ceil((this.references.length) / this.resultsPerPage) || 1;

  sortedRefs = this.references.sort((a, b) => {
    return (formatDate(a.publication_date, 'MM/dd/yyyy', 'en_US').split('/')[2] + formatDate(a.publication_date, 'MM/dd/yyyy', 'en_US').split('/')[0] + formatDate(a.publication_date, 'MM/dd/yyyy', 'en_US').split('/')[1]
    < formatDate(b.publication_date, 'MM/dd/yyyy', 'en_US').split('/')[2] + formatDate(b.publication_date, 'MM/dd/yyyy', 'en_US').split('/')[0] + formatDate(b.publication_date, 'MM/dd/yyyy', 'en_US').split('/')[1] ? 1 : -1);
  }).reduce((arr, item, i) => {
    return i % this.resultsPerPage === 0 ? [...arr, [item]] : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, []);

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      const {page} = params;
      if (/^\d+$/.test(page) && Number(page) > 0) {
        this.page = Math.min(Number(page), this.totalPages);
      } else {
        this.page = 1;
      }
    });
  }

  onClickSort(sortBy: string): void {
    this.sort = !this.sort;

    if (this.sort) {
      this.image = 'assets/images/arrow-asc.png';
    } else {
      this.image = 'assets/images/arrow-desc.png';
    }

    this.isSelected = sortBy;
    if (sortBy === 'title') {
      this.references.sort((a, b) => (this.sort ? (a.title < b.title ? 1 : -1) : (a.title < b.title ? -1 : 1)));
    } else if (sortBy === 'authors') {
      this.references.sort((a, b) => (this.sort ? (a.authors < b.authors ? 1 : -1) : (a.authors < b.authors ? -1 : 1)));
    } else if (sortBy === 'research_org') {
      this.references.sort((a, b) => (this.sort ? (a.research_org < b.research_org ? 1 : -1) : (a.research_org < b.research_org ? -1 : 1)));
    } else if (sortBy === 'publication_date') {
      this.references.sort((a, b) => (this.sort ? (formatDate(a.publication_date, 'MM/dd/yyyy', 'en_US').split('/')[2] + formatDate(a.publication_date, 'MM/dd/yyyy', 'en_US').split('/')[0] + formatDate(a.publication_date, 'MM/dd/yyyy', 'en_US').split('/')[1]
        < formatDate(b.publication_date, 'MM/dd/yyyy', 'en_US').split('/')[2] + formatDate(b.publication_date, 'MM/dd/yyyy', 'en_US').split('/')[0] + formatDate(b.publication_date, 'MM/dd/yyyy', 'en_US').split('/')[1] ? 1 : -1) :
        (formatDate(a.publication_date, 'MM/dd/yyyy', 'en_US').split('/')[2] + formatDate(a.publication_date, 'MM/dd/yyyy', 'en_US').split('/')[0] + formatDate(a.publication_date, 'MM/dd/yyyy', 'en_US').split('/')[1]
        < formatDate(b.publication_date, 'MM/dd/yyyy', 'en_US').split('/')[2] + formatDate(b.publication_date, 'MM/dd/yyyy', 'en_US').split('/')[0] + formatDate(b.publication_date, 'MM/dd/yyyy', 'en_US').split('/')[1] ? -1 : 1)));
    } else if (sortBy === 'osti_id') {
      this.references.sort((a, b) => (this.sort ? (Number(a.osti_id) < Number(b.osti_id) ? 1 : -1) : (Number(a.osti_id) < Number(b.osti_id) ? -1 : 1)));
    } else if (sortBy === 'doi') {
      this.references.sort((a, b) => (this.sort ? (a.doi < b.doi ? 1 : -1) : (a.doi < b.doi ? -1 : 1)));
    } else if (sortBy === 'url') {
      this.references.sort((a, b) => (this.sort ? (a.url < b.url ? 1 : -1) : (a.url < b.url ? -1 : 1)));
    } else {
      throw new Error('Unknown header for sort.');
    }

    this.sortedRefs = this.references.reduce<Reference[][]>((arr, item, i) => {
      return (i % this.resultsPerPage) === 0 ? [...arr, [item]] : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
    }, []);
  }

}
