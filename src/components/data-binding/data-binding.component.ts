import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
// There are 4 types : 

//    1. interpollation :-    one way - ts to html    {{}}            

country = 'India';

a = 5;
b = 10;

name = {
  firstName: 'Ramesh',
  lastName: 'Borate',
  isLoggedIn : false
};

//      2. attribute / property binding :-      one way - ts to html    [] 

 isDisabled = false;

 isRed= true;

//      3. event binding :-           one way  - html to ts    ex. (event)="function()"

 onSubmit(ev:any) {
   alert('Button clicked');
 }
 
  onSubm() {
    alert('Form Submitted!');
  }


//     4. 2 way data binding :-     Import formModule and we use [(ngModel)] to bind the data


 user = {
  email : ''
 };

 saveData(form:any) {
  alert (this.user.email);
 }

 username: string = '';

 age: number = 25;
}
