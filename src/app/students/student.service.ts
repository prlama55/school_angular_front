import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class StudentService {
// tslint:disable-next-line:variable-name
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getAllStudents() {
    const studentsList = this.http.get(this.baseUrl + 'students', this.httpOptions);
    return studentsList;
  }

  saveStudent(formData) {
    return this.http.post(`${this.baseUrl}students`, formData);
  }

  getStudent(id) {
    // @ts-ignore
    return this.http.get(`${this.baseUrl}students/` + id);
  }


}
