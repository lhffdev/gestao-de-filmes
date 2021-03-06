import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { Observable, BehaviorSubject, of, concat } from 'rxjs';
import { BreadcrumbsResolver } from './breadcrumbs.resolver';
import { filter, distinct, toArray } from 'rxjs/operators';
import { Breadcrumb } from './breadcrumb';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {

  private breadCrumbResolver = new BreadcrumbsResolver();
  breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);

  updateSubtitle(subtitle) {
    const crumbs = this.breadcrumbs$.value;
    crumbs[crumbs.length - 1].subtitle = subtitle;
  }

  constructor(private router: Router) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.resolveCrumbs(router.routerState.snapshot.root)
        .pipe(
          distinct(breadcrumb => breadcrumb.text),
          toArray()
        )
        .subscribe(breadcrumbs => this.breadcrumbs$.next(breadcrumbs));
    });
  }

  private resolveCrumbs(route: ActivatedRouteSnapshot): Observable<Breadcrumb> {
    let crumbs$: Observable<Breadcrumb> = of();

    if (route.routeConfig?.data?.title) {
      crumbs$ = this.breadCrumbResolver.resolve(route);
    }

    return route.firstChild ? concat(crumbs$, this.resolveCrumbs(route.firstChild)) : crumbs$;
  }

}
