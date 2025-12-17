import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

loanForm:any;
constructor(private _formBuilder:FormBuilder){
  this.loanForm=this._formBuilder.group({
    fullName:[''],
    email:[''],
    mobile:[''],
    loanType:[''],
    loanAmount:[''],
    employmentType:[''],
    address:['']
  });
}
onSubmit() {
  console.log(this.loanForm.value);
}}