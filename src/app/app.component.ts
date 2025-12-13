import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DataBindingComponent } from "../components/data-binding/data-binding.component";
import { DefaultDirectivesComponent } from "../components/default-directives/default-directives.component";
<<<<<<< HEAD
import { PracticeDataBindingComponent } from "./practice/practice-data-binding/practice-data-binding.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataBindingComponent, DefaultDirectivesComponent, PracticeDataBindingComponent],
=======
import { PipeComponentComponent } from "../components/pipe-component/pipe-component.component";
import { ServiceComponent } from "../components/service/service.component";
import { ParentComponent } from "../components/parent/parent.component";

@Component({
  selector: 'app-root',
<<<<<<< HEAD
  imports: [RouterOutlet, DataBindingComponent, DefaultDirectivesComponent, PipeComponentComponent, ServiceComponent],
>>>>>>> a45f83f24581bbc542e630927bf2f2d6e6014a6b
=======
  imports: [RouterOutlet, DataBindingComponent, DefaultDirectivesComponent, PipeComponentComponent, ServiceComponent, ParentComponent],
>>>>>>> b338a8cac3970024ddf9cb6011b7fd9511fff2f4
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_B10';

  constructor (private _router:Router) {}
}
