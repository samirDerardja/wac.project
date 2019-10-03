// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { User } from '../../models/user';
// import { Router } from '@angular/router';

// @Injectable()

// export class AuthenticationService {

//     API_URI = 'http://127.0.0.1:8000/api';


//     private currentUserSubject: BehaviorSubject<User>;
//     public currentUser: Observable<User>;
//     // loggedIn = false;
//     // loggedOut = true;

//     private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

//     get isLoggedIn() {
//         return this.loggedIn.asObservable();
//     }


//     constructor(private http: HttpClient, private router: Router) {
//         this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
//         this.currentUser = this.currentUserSubject.asObservable();
//     }

//     public get currentUserValue(): User {
//         return this.currentUserSubject.value;
//     }

//     // login(mail: string, password: string, ) {

//     //     return this.http.post<any>(`${this.API_URI}/login_check`, { mail: mail, password: password })
//     //         .pipe(map(user => {
//     //             // login successful if there's a jwt token in the response
//     //             if (user && user.token) {
//     //                 // store user details and jwt token in local storage to keep user logged in between page refreshes
//     //                 localStorage.setItem('currentUser', JSON.stringify(user));
//     //                 this.currentUserSubject.next(user);
//     //             }

//     //             if (mail !== '' && password !== '') {
//     //                 this.loggedIn.next(true);
//     //             }

//     //             return user;
//     //         }));

//     // }

//     logout() {
//         // remove user from local storage to log user out
//         localStorage.removeItem('currentUser');
//         this.currentUserSubject.next(null);
//     }



// }


