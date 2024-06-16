import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css'],
})
export class SubjectListComponent {
  role!:string;
  subjects: any[] = [];

  constructor(private subjectService: SubjectService,private loginService:LoginService) {}

  ngOnInit() {
    this.role=this.loginService.getRole();
    this.subjectService.getAllSubject().subscribe((response) => {
      this.subjects = response;
    });
  }
}
