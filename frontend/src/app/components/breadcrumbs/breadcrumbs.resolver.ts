import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Breadcrumb } from './breadcrumb';
import { Injectable } from '@angular/core';

@Injectable()
export class BreadcrumbsResolver implements Resolve<Breadcrumb> {

  resolve(route: ActivatedRouteSnapshot): Observable<Breadcrumb> {
    const text = route.routeConfig.data.title;
    const path = this.getFullPath(route);

    return of({path, text});
  }

  getFullPath(route: ActivatedRouteSnapshot): string {
    const relativePath = (url) => url.reduce((buffer, item) => (buffer += '/' + item.path), '');
    const fullPath = (routes) => routes.reduce((buffer, item) => (buffer += relativePath(item.url)), '');
    return fullPath(route.pathFromRoot);
  }

}
