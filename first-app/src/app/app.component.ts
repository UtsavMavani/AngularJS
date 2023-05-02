import { Component, ElementRef, ViewChild } from '@angular/core';
import { StudentService } from './services/student.service';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [StudentService]
})

export class AppComponent {
  title = 'First App';

  students: any;
  constructor(studentArray: StudentService) {
    this.students = studentArray.getStudent();
  }

  showHello() {
    return "Hello, Angular";
  }

  sayHello() {
    alert("Hello, Angular");
  }

  user = { id: 1, name: "Utsav" };

  show = true;

  customers = ['Utsav', 'Dhruvil', 'Kenil'];

  color = "red";

  name: string = "";

  // Access element of HTML template using @ViewChild decorator
  @ViewChild('dobInput') dob!: ElementRef;
  age:any = 0;

  calculateAge() {
    let birthYear = new Date(this.dob.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let ageYear = currentYear - birthYear;
    return this.age = ageYear || "Enter DOB";
  }

  // Access register component using @ViewChild decorator
  @ViewChild(RegisterComponent, {static: true}) registerComp!: RegisterComponent;

}
