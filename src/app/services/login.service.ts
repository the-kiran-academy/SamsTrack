import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private roleSubject = new BehaviorSubject<string>('');
  role$ = this.roleSubject.asObservable();

  setRole(role: string): void {
    this.roleSubject.next(role);
  }

  getRole(): string {
    return this.roleSubject.value;
  }

  constructor(private http: HttpClient) {}

  loginUser(username: string, password: string): Observable<any> {
    console.log('service :', username);
    console.log('service :', password);
    const url = 'http://localhost:8091/user/login-user';
    return this.http
      .post<any>(url, { username, password })
      .pipe(catchError(this.handleError));
  }
  private handleError(httpErrorResponse: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (httpErrorResponse.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client-side error: ${httpErrorResponse.error.message}`;
      console.log('client side error');
    } else {
      // Server-side error
      if (httpErrorResponse.status === 0) {
        // Network error
        errorMessage = 'Server Down. Please try again later.';
      } else {
        console.log('server side error 500', httpErrorResponse);

        errorMessage = `Server-side error: ${httpErrorResponse.status} - ${httpErrorResponse.error.message}`;
      }
    }
    return throwError(errorMessage);
  }
}
