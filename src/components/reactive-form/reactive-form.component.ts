import { FormBuilder, ReactiveFormsModule, Validators, FormControlName } from '@angular/forms';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-reactive-form',
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatIconModule, ReactiveFormsModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  userForm: any;

  constructor(private _formBuilder: FormBuilder) {

    this.userForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      ageUser: ['', [Validators.required, Validators.max(80), Validators.min(18)]],
      address: ['', [Validators.required, Validators.maxLength(200)]],
      mobile: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      dob: [''],
      age: [{ value: '', disabled: false }]

    })
  }


  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }

  onsub() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);


    }
  }

  isInvalid(controlName: any) {
    const control = this.userForm.get(controlName);
    return control.invalid && (control.touched || control.dirty);
  }

  isPasswordValid(controlName: any) {
    const passControl = this.userForm.get(controlName);
    return passControl.invalid && passControl.touched;
  }

  calculateAge(dob: Date): number {
    const today = new Date();
    const birthDate = new Date(dob);

    let age = today.getFullYear() - birthDate.getFullYear();

    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

  ngOnInit() {
    this.userForm.get('dob')?.valueChanges.subscribe((dob: Date) => {
      if (dob) {
        const age = this.calculateAge(dob);
        this.userForm.get('age')?.setValue(age);
        console.log(age);

      }
    });
  }
}
