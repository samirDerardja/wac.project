import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Post} from '../models/Post';


@Injectable({
    providedIn: 'root'
})
export class PostService {
  API_URI = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]>{

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))
   });
    return this.http.get<Post[]>(`${this.API_URI}/api/posts`, {headers : reqHeader}).pipe(map((res: Post[]) => {


      return res;
    }));
  }

  getPost(id: String): Observable<Post>{

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))
   });
    return this.http.get(`${this.API_URI}` +id , {headers : reqHeader}).pipe(map((res: Post) => {
      return res;
    }))
  }

  deletePost(id: String) {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))
   });
    return this.http.delete(`${this.API_URI}`+id , {headers : reqHeader} );
  }


  savePost(Post: Post): Observable<Post> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))
   });
    return this.http.post<Post>(`${this.API_URI}/api/posts`, Post, {headers: reqHeader})

  }

  updatePost(id:string | number, updatePost: Post): Observable<Post> {

    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))
   });
    return this.http.put<Post>(`${this.API_URI}` +id , updatePost, {headers: reqHeader});
  }

}
