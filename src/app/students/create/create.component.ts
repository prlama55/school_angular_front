import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StudentService} from '../student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  student: any;
  formGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      batch: ['', Validators.required],
      rollNumber: ['', Validators.required],
      phoneNumber: [''],
    });
  }

  saveStudent() {
    console.log('this.formGroup.value====', this.formGroup.value);
    this.studentService.saveStudent(this.formGroup.value).subscribe(student => {
      if (student) {
        this.router.navigate(['/students']);
      }
    });
  }

}
