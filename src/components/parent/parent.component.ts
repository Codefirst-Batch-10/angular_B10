import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  companyName = "codefirst";
  childMsg = '';

 @ViewChild(ChildComponent) childComp!: ChildComponent;

  getChildMesssage(ev:any) {
    console.log('child message:' , ev);
    this.childMsg = ev;

  }

  ngAfterViewInit() {
    this.childComp.childFunction();   
  }

}
