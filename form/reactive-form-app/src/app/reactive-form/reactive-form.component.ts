import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
 
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  constructor() { }
  
  signupForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl('') 
  });

  userData: any;

  onSubmit() {
    this.userData = this.signupForm.value;
    console.log(this.signupForm.value);
  }
}
