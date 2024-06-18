import { Component } from '@angular/core';
import { ShowAllAttendance} from 'src/app/models/show-all-attendance';
import { AttendanceService } from 'src/app/services/attendance.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.css'],
})
export class ViewAttendanceComponent {
  role!: string;

  showAllAttendance: ShowAllAttendance[] = [];

  constructor(private attendanceService: AttendanceService) {}

  ngOnInit() {
    this.role = String(localStorage.getItem('role'));
    this.attendanceService.showAllAttendance().pipe(
      map(response => response.map((showAllAttendance: any) => this.transformData(showAllAttendance)))
    ).subscribe((transformedData) => {
      this.showAllAttendance = transformedData;
    });
  }


  private transformData(data: any): ShowAllAttendance {
    console.log('dataaa ',data);

    return {
      id: data.id,
      username: data.user.username,
      date: data.date,
      time: data.time,
      numberOfStudents: data.numberOfStudents,
      studentNames: data.students.map((student: any) => student.name).sort(),
      subjectName: data.subject.name
    };
  }
}
