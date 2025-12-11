import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  childFunction() {
    console.log('I am child method');
  }
}
