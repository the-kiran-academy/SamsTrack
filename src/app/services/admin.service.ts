import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any[]> {
    const url = 'http://localhost:8091/user/get-all-user';
    return this.http.get<any[]>(url);
  }

  addUser(user: User): Observable<any> {
    console.log('in service : ', user);

    const postUrl = 'http://localhost:8091/user/register-user';
    return this.http.post<User>(postUrl, user);
  }
}
