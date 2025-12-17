import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HoverHighlightDirective } from '../../shared/hover-highlight.directive';
import { FormReactiveComponent } from "../form-reactive/form-reactive.component";

@Component({
  selector: 'app-default-directives',
  imports: [HoverHighlightDirective],
  templateUrl: './default-directives.component.html',
  styleUrl: './default-directives.component.css',
})
export class DefaultDirectivesComponent {
  isShowTitle: boolean = false;

  students:any = [
    { id: 1, name: 'Rahul', score: 95 },
    { id: 2, name: 'Priya', score: 88 },
    { id: 3, name: 'Amit', score: 78 },
  ];
}
