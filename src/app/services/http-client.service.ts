import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  public getData(url: string): Observable<any>{
    return this.httpClient.get(url);
  }
}



