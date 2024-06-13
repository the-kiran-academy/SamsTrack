import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from '../models/subject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  constructor(private http: HttpClient) {}

  addSubject(subject: Subject): Observable<any> {
    const url = 'http://localhost:8091/subject/add-subject';
    return this.http.post(url, subject);
  }
}
