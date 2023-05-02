import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  constructor() { }

  userData: any;

  onSubmit(signupForm: any) {
    this.userData = signupForm.value;
    // console.log(formData.value);
  }
}
