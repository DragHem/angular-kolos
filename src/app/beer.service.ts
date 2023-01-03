import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beer } from '../models/Beer';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.baseUrl);
  }

  getOne(id: number): Observable<Beer> {
    return this.http.get<Beer>(this.baseUrl + id);
  }

  deleteOne(id: number): Observable<Beer[]> {
    return this.http.delete<Beer[]>(this.baseUrl + id);
  }

  updateOne(id: number, beer: Beer): void {
    this.http.put<Beer>(this.baseUrl + id, beer);
  }

  create(beer: Beer): Observable<Beer[]> {
    return this.http.post<Beer[]>(this.baseUrl, beer);
  }
}
