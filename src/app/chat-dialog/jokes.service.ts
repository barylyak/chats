import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
private url = `https://api.chucknorris.io/jokes/random`;
  constructor(
    private http: HttpClient
  ) { }
  getRandomJoke(){
    return this.http.get(this.url)
  }

}
