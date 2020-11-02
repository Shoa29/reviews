import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient, HttpResponse, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
@Injectable({
  providedIn: 'root'
})
export class RevmongoService {

  constructor(private http: HttpClient) { }
  
}
