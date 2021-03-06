import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Constantes {

  STATUS_RESPONSE_CODE = {
    notFound: 404,
    unprocessableEntity: 422,
    internalServerError: 500
  };

}
