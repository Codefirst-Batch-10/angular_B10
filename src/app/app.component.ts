import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { DataBindingComponent } from "../components/data-binding/data-binding.component";
import { DefaultDirectivesComponent } from "../components/default-directives/default-directives.component";
import { PipeComponentComponent } from "../components/pipe-component/pipe-component.component";
import { ServiceComponent } from "../components/service/service.component";
import { ParentComponent } from "../components/parent/parent.component";
import { ReactiveFormComponent } from "../components/reactive-form/reactive-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataBindingComponent, DefaultDirectivesComponent, PipeComponentComponent, ServiceComponent, ParentComponent, ReactiveFormComponent, RouterLinkWithHref],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_B10';

  constructor (private _router:Router) {}
}
