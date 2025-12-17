import { FormBuilder, ReactiveFormsModule, Validators, FormControlName, FormArray, FormGroup, FormControl } from '@angular/forms';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { provideNativeDateAdapter, MatOption } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NgForOf } from "../../../node_modules/@angular/common/common_module.d-NEF7UaHr";
import { NgFor } from '@angular/common';
import { DyanamicFormComponent } from "../dyanamic-form/dyanamic-form.component";
import { MatSelect } from "@angular/material/select";


@Component({
  selector: 'app-reactive-form',
  standalone:true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatIconModule, ReactiveFormsModule, MatSliderModule, MatSlideToggleModule, DyanamicFormComponent, MatOption, MatSelect],
  providers: [provideNativeDateAdapter()],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  userForm: any;
  registrationForm:any;


  constructor(private _formBuilder: FormBuilder) {

    this.userForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      ageUser: ['', [Validators.required, Validators.max(80), Validators.min(18)]],
      address: ['', [Validators.required, Validators.maxLength(200)]],
      mobile: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      dob: [''],
      age: [{ value: '', disabled: true }]

    })

//--------------- formgroup / formArray ---------------------

    this.registrationForm=new FormGroup({
      name: new FormControl(''),
      emails: new FormArray([
        new FormControl('first@example.com'),
        new FormControl('second@example.com')
      ])
    });

// Add new email dynamically


    (this.registrationForm.get('emails')as FormArray).push(new FormControl('new@example.com'));
  }


  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }

  onSub() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);


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

  // age calculator -----------------------------------

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

//------------------------- mat slider --------------------

formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }


}
