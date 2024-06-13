import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getAllUsers():Observable<any[]> {
    const url = 'http://localhost:8091/user/get-all-user';
    return this.http.get <any[]>(url);
  }
}
