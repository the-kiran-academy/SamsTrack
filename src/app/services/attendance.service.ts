import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  constructor(private http: HttpClient) {}

  getAllStudent():Observable<any>{
    const url='http://localhost:8091/student/get-all-students';
    return this.http.get(url);

  }

}
