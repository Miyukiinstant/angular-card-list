import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Furtrack } from 'src/app/interfaces/furtrack';

@Injectable({
  providedIn: 'root'
})
export class FurtrackService {

  constructor(private http:HttpClient) { }
  private baseURI = `${document.location.protocol}//${document.location.hostname}/furtrack.php`
  getImage(): Observable<Furtrack>{
    return this.http.get<Furtrack>(this.baseURI);
  }
}