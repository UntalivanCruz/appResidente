/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Residente } from '../models/residente';

@Injectable({
  providedIn: 'root',
})
export class HabitantesCasaResidenteControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation habitantesCasaResidenteControllerGetResidente
   */
  static readonly HabitantesCasaResidenteControllerGetResidentePath = '/habitantes-casas/{id}/residente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getResidente()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResidente$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Array<Residente>>> {

    const rb = new RequestBuilder(this.rootUrl, HabitantesCasaResidenteControllerService.HabitantesCasaResidenteControllerGetResidentePath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Residente>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getResidente$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResidente(params: {
    id: string;
  }): Observable<Array<Residente>> {

    return this.getResidente$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Residente>>) => r.body as Array<Residente>)
    );
  }

}
