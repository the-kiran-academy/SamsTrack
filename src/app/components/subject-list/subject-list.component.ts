import { Component } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css'],
})
export class SubjectListComponent {
  subjects: any[] = [];

  constructor(private subjectService: SubjectService) {}

  ngOnInit() {
    this.subjectService.getAllSubject().subscribe((response) => {
      this.subjects = response;
    });
  }
}
