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

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = new FormGroup({
      name: new FormControl(''),
      emails: new FormArray([
        this.createEmail()
      ])
    });
  }

  // Create email control
  createEmail() {
    return this.fb.control('', [Validators.required, Validators.email]);
  }

  // Getter (IMPORTANT)
  get emails(): FormArray {
    return this.userForm.get('emails') as FormArray;
  }

  // Add email
  addEmail() {
    this.emails.push(this.createEmail());
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}