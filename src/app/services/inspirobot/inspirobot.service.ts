import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INSPIRO } from './inspiro';

@Injectable({
  providedIn: 'root'
})
export class InspirobotService {

  constructor(private http:HttpClient) { }
  private baseURI = `${document.location.protocol}//${document.location.hostname}/api.php`
  getImage(): Observable<INSPIRO>{
    return this.http.get<INSPIRO>(this.baseURI);
  }
}
