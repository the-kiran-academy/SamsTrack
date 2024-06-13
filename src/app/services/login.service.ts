import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}



  loginUser(username: string, password: string): Observable<any> {
    console.log("service :",username)
    console.log("service :",password)
    const url = 'http://localhost:8091/user/login-user';
    return this.http.post<any>(url, { username, password });

  }
}
