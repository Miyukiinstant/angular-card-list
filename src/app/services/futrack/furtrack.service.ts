import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FURTRACK } from './furtrack';

@Injectable({
  providedIn: 'root'
})
export class FurtrackService {

  constructor(private http:HttpClient) { }
  private baseURI = `${document.location.protocol}//${document.location.hostname}/furtrack.php`
  getImage(): Observable<FURTRACK>{
    return this.http.get<FURTRACK>(this.baseURI);
  }
}