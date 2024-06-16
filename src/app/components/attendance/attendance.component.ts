import { Component } from '@angular/core';
import { Student } from 'src/app/models/student';
import { AttendanceService } from 'src/app/services/attendance.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
})
export class AttendanceComponent {
  students: Student[] = [];
  role!: string;

submitAttendance() {
}

  constructor(private attendanceService: AttendanceService) {}

  ngOnInit() {
    this.role= String(localStorage.getItem('role'));
     console.log('log in role ',this.role);

    this.attendanceService.getAllStudent().subscribe((response) => {
      this.students=response;
      console.log("my student ",this.students)
    });
  }
}
