import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  OnFormSubmitted(form: NgForm) {
    console.log(form)
    console.log(form.value.FullName)
    console.log(form.value.email)
    console.log(form.value.password)
    console.log(form.value.Enrollment)
    console.log(form.value.phone)
  }

  Gender = [
    {
      name: '1', value: 'male', display: 'MALE'
    },
    {
      name: '2', value: 'female', display: 'FEMALE'
    },
    {
      name: '3', value: 'other', display: 'OTHER'
    }
  ]
}
