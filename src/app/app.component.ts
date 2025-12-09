import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DataBindingComponent } from "../components/data-binding/data-binding.component";
import { DefaultDirectivesComponent } from "../components/default-directives/default-directives.component";
import { PipeComponentComponent } from "../components/pipe-component/pipe-component.component";
import { ServiceComponent } from "../components/service/service.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataBindingComponent, DefaultDirectivesComponent, PipeComponentComponent, ServiceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_B10';

  constructor (private _router:Router) {}
}
