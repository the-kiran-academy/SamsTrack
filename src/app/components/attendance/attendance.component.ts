import { Component } from '@angular/core';
import { AttendanceRecord } from 'src/app/models/attendance-record';
import { Faculty } from 'src/app/models/faculty';
import { Student } from 'src/app/models/student';
import { Subject } from 'src/app/models/subject';
import { AttendanceService } from 'src/app/services/attendance.service';
import { FacultyService } from 'src/app/services/faculty.service';
import { LoginService } from 'src/app/services/login.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
})
export class AttendanceComponent {
  students: Student[] = [];
  role!: string;

  selectedIds: number[] = [];
  selectedFaculty!: number;
  selectedSubject!: number;
  selectedDate!: string;
  selectedTime!: string;
  numberOfStudents!:number;

  faculties: Faculty[] = [];
  subjects: Subject[] = [];

  submitAttendance() {
    this.selectedIds = this.students
      .filter((student) => student.isSelected)
      .map((student) => student.id);

      this.numberOfStudents=this.selectedIds.length;

    console.log('ids ', this.selectedIds);
    console.log('subject subject id ', this.selectedSubject);
    console.log('selected faculty id ', this.selectedFaculty);
    console.log("selected date ",this.selectedDate);
    console.log('selected time ',this.selectedTime);
    console.log('number of students ',this.numberOfStudents);

  }

  constructor(
    private attendanceService: AttendanceService,
    private subjectService: SubjectService,
    private facultyService: FacultyService
  ) {}

  getAllSubjects() {
    this.subjectService.getAllSubject().subscribe((response) => {
      this.subjects = response;
    });
  }

  getAllFaculty() {
    this.facultyService.getAllFaculty().subscribe((response) => {
      this.faculties = response;
    });
  }

  getAllStudents() {
    this.attendanceService.getAllStudent().subscribe((response) => {
      this.students = response;
    });
  }

  ngOnInit() {
    this.role = String(localStorage.getItem('role'));

    this.getAllStudents();
    this.getAllFaculty();
    this.getAllSubjects();
  }

  onSubjectChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedSubject = Number(selectElement.value);
  }

  onFacultyChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedFaculty = Number(selectElement.value);
  }
  onTimeChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedTime = selectElement.value;
  }

  onDateChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.selectedDate = inputElement.value;
  }
}
