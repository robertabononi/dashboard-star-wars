import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private readonly baseUrl = 'https://swapi.dev/api/';

  constructor(
    private http: HttpClient
  ) { }

  getMovies(): Observable<Object> {
    return this.http.get(`${this.baseUrl}films`);
  }

  getCharacters(): Observable<Object> {
    return this.http.get(`${this.baseUrl}people`);
  }

  getPlanets(): Observable<Object> {
    return this.http.get(`${this.baseUrl}planets`);
  }

  getVehicles(): Observable<Object> {
    return this.http.get(`${this.baseUrl}vehicles`);
  }
}
