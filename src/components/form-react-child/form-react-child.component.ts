import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-form-react-child',
  imports: [CommonModule],
  templateUrl: './form-react-child.component.html',
  styleUrl: './form-react-child.component.css'
})
export class FormReactChildComponent {

  @Input() sendReactData:any="";
}
