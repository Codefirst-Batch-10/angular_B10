import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControlName, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormReactChildComponent } from "../form-react-child/form-react-child.component";

@Component({
  selector: 'app-form-reactive',
  imports: [ReactiveFormsModule, CommonModule, FormReactChildComponent],
  templateUrl: './form-reactive.component.html',
  styleUrl: './form-reactive.component.css'
})
export class FormReactiveComponent {

  result:any;
  userForm: any;

  constructor(private fb: FormBuilder) {

    this.userForm = this.fb.group({
    name: ['', Validators.required],
    dob: ['', Validators.required],
    mobile: ['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', Validators.required],
    loanType: ['', Validators.required],
    loanAmount: ['', Validators.required],
    loanPurpose: ['', Validators.required],
    employer: ['', Validators.required],
    jobTitle: ['', Validators.required],
    income: ['', Validators.required],
    signature: ['', Validators.required],
    date: ['', Validators.required]


    })

  }

  isInvalid(controlName: any) {
    const control = this.userForm.get(controlName);
    return control.invalid && (control.touched || control.dirty);
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.result = this.userForm.value;
      console.log(this.result);

    }
  }
}
