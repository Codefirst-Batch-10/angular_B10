import { NgFor, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormGroup,FormBuilder,FormArray,FormControl, Validators, FormControlName, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-dyanamic-form',
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './dyanamic-form.component.html',
  styleUrl: './dyanamic-form.component.css'
})
export class DyanamicFormComponent {

  registrationForm = new FormGroup({
    name: new FormControl(''),
    emails: new FormArray([
      new FormControl('first@example.com'),
      new FormControl('second@example.com')
    ])
  });

  get emails(): FormArray {
    return this.registrationForm.get('emails') as FormArray;
  }

  addEmail() {
    this.emails.push(new FormControl(''));
  }

  onSub() {
    console.log(this.registrationForm.value);
  }
}