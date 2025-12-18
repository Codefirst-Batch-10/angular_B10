import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { Router } from '@angular/router';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit {

  userForm!: FormGroup;
  registrationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    // ---------------- USER FORM ----------------
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      ageUser: ['', [Validators.required, Validators.min(18), Validators.max(80)]],
      address: ['', [Validators.required, Validators.maxLength(200)]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      dob: [''],
      age: [{ value: '', disabled: true }]
    });

    // ---------------- REGISTRATION FORM ----------------
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(12)
        ]
      ]
    });
  }

  ngOnInit(): void {
    // Age calculation
    this.userForm.get('dob')?.valueChanges.subscribe((dob: Date) => {
      if (dob) {
        const age = this.calculateAge(dob);
        this.userForm.get('age')?.setValue(age);
      }
    });
  }

  // ---------------- USER FORM SUBMIT ----------------
  onSubmit(): void {
    if (this.userForm.valid) {
      console.log('UserForm:', this.userForm.value);
      this.router.navigate(['/service'], {
        queryParams: { isValidData: true }
      });
    }
  }

  // ---------------- REGISTRATION FORM SUBMIT ----------------
  onSubmitRegForm() {
    if(this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      this.router.navigate(['/service'],{
        queryParams : { isValidData : true}
      });
    }
  }

  // ---------------- VALIDATION HELPERS ----------------
  isInvalid(controlName: string): boolean {
    const control =
      this.registrationForm.get(controlName) ||
      this.userForm.get(controlName);

    return !!(control && control.invalid && (control.touched || control.dirty));
  }

  // isPasswordValid(controlName: string): boolean {
  //   const control =
  //     this.registrationForm.get(controlName) ||
  //     this.userForm.get(controlName);

  //   return !!(control && control.invalid && control.touched);
  // }

  // ---------------- AGE CALCULATOR ----------------
  calculateAge(dob: Date): number {
    const today = new Date();
    const birthDate = new Date(dob);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }

  // ---------------- SLIDER LABEL ----------------
  formatLabel(value: number): string {
    return value >= 1000 ? Math.round(value / 1000) + 'k' : `${value}`;
  }
}
