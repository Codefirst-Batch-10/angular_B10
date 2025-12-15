import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  userForm: any;

  constructor(private _formBuilder: FormBuilder) {

    this.userForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(6)]]
    });
  }

  onSubmit() {
    if(this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }

  isInvalid(controlName:any) {
    const control = this.userForm.get(controlName);
    return control.invalid && (control.touched || control.dirty);
  }
}
