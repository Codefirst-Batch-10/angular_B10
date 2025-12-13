import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() sendToChild = '';

  @Output() messageEvt = new EventEmitter<any>();

  ngOnInit() {
    console.log('this.sendToChild',this.sendToChild);
    const arr = [{id:'1', password:'00'}]
    this.messageEvt.emit(arr);
  }

  ngOnChanges(changes:SimpleChange) {
    if(changes.currentValue == changes.previousValue) {
      console.log("The value has changed");
    }
  }

  childFunction() {
    console.log('I am child method');

  }

  
  
}