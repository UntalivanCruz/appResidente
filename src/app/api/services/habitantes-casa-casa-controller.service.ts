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

import { Casa } from '../models/casa';

@Injectable({
  providedIn: 'root',
})
export class HabitantesCasaCasaControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation habitantesCasaCasaControllerGetCasa
   */
  static readonly HabitantesCasaCasaControllerGetCasaPath = '/habitantes-casas/{id}/casa';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCasa()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCasa$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Array<Casa>>> {

    const rb = new RequestBuilder(this.rootUrl, HabitantesCasaCasaControllerService.HabitantesCasaCasaControllerGetCasaPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Casa>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCasa$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCasa(params: {
    id: string;
  }): Observable<Array<Casa>> {

    return this.getCasa$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Casa>>) => r.body as Array<Casa>)
    );
  }

}
