import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudent(){
    return [
      { id: 1, name: "Utsav", email: "utsav@gmail.com" },
      { id: 2, name: "Dhruvil", email: "dhruvil@gmail.com" },
      { id: 3, name: "Kenil",email: "kenil@gmail.com" }
    ];
  }
}
