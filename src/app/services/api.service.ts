import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private URI: string = 'https://api.themoviedb.org/3';
  private KEY: string = 'a3631c681a3904650b0e2b458b55e891';

  constructor(private _http: HttpClient) {

  }

  getTrending() {
    return this._http.get(`${this.URI}/trending/movie/week?api_key=${this.KEY}`).pipe(map((data: any) => data));
  }

  getPopular() {
    return this._http.get(`${this.URI}/discover/movie?api_key=${this.KEY}`).pipe(map((data: any) => data.results));
  }

}
