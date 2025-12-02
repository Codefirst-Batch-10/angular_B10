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
 country = 'India';

 isDiseabled = false;

 user = {
  email : ''
 };

 
 onSubmit(ev:any) {
  alert('Button clicked');
 }

 saveData(form:any) {
  alert (this.user.email);
 }
}
