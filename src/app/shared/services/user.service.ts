import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';
import {JwtResponse} from '../../jwtresponse/jwtresponse';
import {CookieService} from 'ngx-cookie-service';
import {User} from "../../models/User";

@Injectable({
    providedIn: 'root'
})
export class UserService {


  apiUrl = 'http://127.0.0.1:8000/api'

    private currentUserSubject: BehaviorSubject<JwtResponse>;
    public currentUser: Observable<JwtResponse>;
    public nameTerms = new Subject<string>();
    public name$ = this.nameTerms.asObservable();

    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }
    constructor(private http: HttpClient,
                private cookieService: CookieService) {

        const memo = localStorage.getItem('currentUser');
        this.currentUserSubject = new BehaviorSubject<JwtResponse>(JSON.parse(memo));
        this.currentUser = this.currentUserSubject.asObservable();
        cookieService.set('currentUser', memo);
    }

    get currentUserValue() {
        return this.currentUserSubject.value;
    }

     login(mail: string, password: string, ) {

           return this.http.post<any>(`${this.apiUrl}/login_check`, { mail: mail, password: password })
             .pipe(map(user => {
                  // login successful if there's a jwt token in the response
                  if (user && user.token) {
                     // store user details and jwt token in local storage to keep user logged in between page refreshes
                      localStorage.setItem('currentUser', JSON.stringify(user));
                     this.currentUserSubject.next(user);
                 }

                   if (mail !== '' && password !== '') {
                       this.loggedIn.next(true);
                   }

               return user;
            }));
          }

    logout() {
        this.currentUserSubject.next(null);
        localStorage.removeItem('currentUser');
        this.cookieService.delete('currentUser');
    }

    signUp(user: User): Observable<User> {
        const url = `${this.apiUrl}/users`;
        return this.http.post<User>(url, user);
    }

    update(user: User): Observable<User> {
        const url = `${this.apiUrl}/profile`;
        return this.http.put<User>(url, user);    }

    get(mail: string): Observable<User> {
        const url = `${this.apiUrl}/profile/${mail}`;
        return this.http.get<User>(url);
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            console.log(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
