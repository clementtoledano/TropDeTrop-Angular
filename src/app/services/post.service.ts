import { Injectable } from '@angular/core';
import {AppSettings} from '../settings/app.settings';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/post';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl: string = AppSettings.APP_URL + '/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<GetResponsePost>(this.baseUrl).pipe(
      map(response => response._embedded.posts)
    );
  }
}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};
interface GetResponsePost {
  _embedded: {
    posts: Post[];
  };
}
