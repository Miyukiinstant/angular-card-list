import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inspiro } from 'src/app/interfaces/inspiro';
import { Urls } from 'src/app/interfaces/urls';

@Injectable({
  providedIn: 'root'
})
export class InspirobotService {

  constructor(private http:HttpClient) { }
  getImage(): Observable<Inspiro>{
    return this.http.get<Inspiro>(new Urls().urls.api);
  }
}
