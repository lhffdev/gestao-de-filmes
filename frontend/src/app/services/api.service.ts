import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constantes } from '../helpers/constantes';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private constantes: Constantes
  ) { }

  get(path, params = {}) {
    return this.httpClient
      .get(this.apiUrl(path), this.getOptions(params))
      .toPromise()
      .then(response => this.successResponse(response))
      .catch(response => this.errorResponse(response));
  }

  post(path, params = {}) {
    return this.httpClient
      .post(this.apiUrl(path), params, this.getOptions())
      .toPromise()
      .then(response => this.successResponse(response))
      .catch(response => this.errorResponse(response));
  }

  patch(path, params = {}) {
    return this.httpClient
      .patch(this.apiUrl(path), params, this.getOptions())
      .toPromise()
      .then(response => this.successResponse(response))
      .catch(response => this.errorResponse(response));
  }

  delete(path, params = {}) {
    return this.httpClient
      .delete(this.apiUrl(path), this.getOptions({}, params))
      .toPromise()
      .then(response => this.successResponse(response))
      .catch(response => this.errorResponse(response));
  }

  apiUrl(path) {
    return `${environment.apiUrl}/${path}`;
  }

  private getOptions(params = {}, body = {}) {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      params,
      body
    };
  }

  private successResponse(response) {
    return response;
  }

  private errorResponse(response) {
    switch (response.status) {
      case this.constantes.STATUS_RESPONSE_CODE.notFound: {
        this.router.navigate(['/404']);
        break;
      }
      case this.constantes.STATUS_RESPONSE_CODE.unprocessableEntity: {
        throw response.error;
      }
      default: {
        this.router.navigate(['/500']);
        break;
      }
    }
  }

}
