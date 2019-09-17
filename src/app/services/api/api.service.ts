import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private gifs: Observable<string>;


  constructor(private http: HttpClient) {

  }

  public loadGifs(search: string): Observable<string[]> {
    return this.http.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${environment.apikey}&limit=20`).pipe(
      map(response => {
        // @ts-ignore
        const data = response.data as [];
        return data.map(img => {
          // @ts-ignore
          return img.images.fixed_height_small.url;
        });
      })
    );
  }

}
