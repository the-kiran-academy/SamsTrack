import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}



  loginUser(username: string, password: string): Observable<any> {
    console.log("service :",username)
    console.log("service :",password)
    const url = 'http://localhost:8091/user/login-user';
    return this.http.post<any>(url, { username, password }).pipe(
      catchError(this.handleError)
    );

  }
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client-side error: ${error.error.message}`;
      console.log("client side error");

    } else {
      console.log("client side error");

      // Server-side error
      if (error.status === 0) {
        console.log("client side error  0");

        // Network error
        errorMessage = 'Server Down. Please try again later.';
      } else {
        console.log("client side error 500");

        errorMessage = `Server-side error: ${error.status} - ${error.message}`;
      }
    }
    return throwError(errorMessage);
  }
}
