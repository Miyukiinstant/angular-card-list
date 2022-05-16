import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inspiro } from 'src/app/interfaces/inspiro';

@Injectable({
  providedIn: 'root'
})
export class InspirobotService {

  constructor(private http:HttpClient) { }
  private baseURI = `${document.location.protocol}//${document.location.hostname}/api.php`
  getImage(): Observable<Inspiro>{
    return this.http.get<Inspiro>(this.baseURI);
  }
}
