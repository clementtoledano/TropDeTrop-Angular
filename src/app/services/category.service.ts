import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Category} from '../models/category';
import {Post} from '../models/post';
import {map} from 'rxjs/operators';
import {AppSettings} from '../settings/app.settings';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class CategoryService {

  private baseUrl: string = AppSettings.APP_URL + '/categories';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<GetResponseCategory>(this.baseUrl).pipe(
      map(response => response._embedded.category)
    );
  }

  getCategory(id: number): Observable<Post> {
    // need to build URL based on product id
    return this.http.get<Post>(this.baseUrl + id);
  }

  /** POST: add a new category to the database */
  create(category: Category) {
    console.log(category);
    this.http
      .post<Category>('http://localhost:8080/api/categories', category, httpOptions)
      .subscribe(() => {
        console.log('Enregistrement terminé !');
      }, (error) => {
        console.log('Erreur ! : ' + error);
      });
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

interface GetResponseCategory {
  _embedded: {
    category: Category[];
  };
}
