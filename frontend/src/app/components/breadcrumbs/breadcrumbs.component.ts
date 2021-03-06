import { Component, OnDestroy, OnInit } from '@angular/core';
import { Breadcrumb } from './breadcrumb';
import { BreadcrumbsService } from './breadcrumbs.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html'
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  crumbs: Breadcrumb[];
  lastCrumb: Breadcrumb;
  breadcrumbsServiceObservable;

  constructor(public breadcrumbsService: BreadcrumbsService) { }

  ngOnInit() {
    this.breadcrumbsServiceObservable = this.breadcrumbsService.breadcrumbs$.subscribe(crumbs => {
      this.lastCrumb = crumbs[crumbs.length - 1];
      this.crumbs = crumbs;
    })
  }

  ngOnDestroy() {
    this.breadcrumbsServiceObservable.unsubscribe();
  }
}
