import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
})

export class PaginationComponent implements OnInit {
    @Input() page = 1;
    @Input() totalPages = 1;

    pageRange: number[];

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.updatePagination();
    }

    gotoPage(page: number): void {
        this.page = page;
        this.updatePagination();
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { page: page === 1 ? null : page},
          queryParamsHandling: 'merge'
        });
    }

    updatePagination(): void{
      const pageRange: number[] = [];
      if (this.totalPages <= 9) {
        for (let i = 1; i <= this.totalPages; ++i) {
            pageRange.push(i);
        }
      } else {
        pageRange.push(this.page);
        while (pageRange.length < 9) {
          if (pageRange[0] - 1 > 0) {
              pageRange.splice(0, 0, pageRange[0] - 1);
          }
          if (pageRange[pageRange.length - 1] + 1 <= this.totalPages) {
            pageRange.push(pageRange[pageRange.length - 1] + 1);
          }
        }
      }
      this.pageRange = pageRange;
    }
}
