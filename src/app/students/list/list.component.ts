import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private studentService: StudentService,
              private router: Router
              ) { }
  studentList: any[];
  ngOnInit() {
    this.studentService.getAllStudents().subscribe((data: any) => {
      this.studentList = data;
    });
  }
  gotoDetail(event, id) {
    console.log('id====', id);
    // @ts-ignore
    this.router.navigate([`/students/${id}/details`]);
  }
}
