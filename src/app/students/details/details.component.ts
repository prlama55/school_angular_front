import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  studentId: string;
  student: any;
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private studentService: StudentService
    ) {
    this.studentId = activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.studentService.getStudent(this.studentId)
      .subscribe(student => {
      this.student = student;
    });
  }

}
