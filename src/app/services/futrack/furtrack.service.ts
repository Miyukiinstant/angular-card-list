import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Furtrack } from 'src/app/interfaces/furtrack';
import { Urls } from 'src/app/interfaces/urls';

@Injectable({
  providedIn: 'root'
})
export class FurtrackService {

  constructor(private http:HttpClient) { }
  getImage(): Observable<Furtrack>{
    return this.http.get<Furtrack>(new Urls().urls.furtrack);
  }
}