import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  getAllStudents() {
    const studentsList = this.http.get('http//:localhost:3000/students');
    return studentsList;
  }
}
