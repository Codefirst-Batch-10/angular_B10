import { Routes } from '@angular/router';
import { ServiceComponent } from '../components/service/service.component';
import { DataBindingComponent } from '../components/data-binding/data-binding.component';
import { DefaultDirectivesComponent } from '../components/default-directives/default-directives.component';
import { PipeComponentComponent } from '../components/pipe-component/pipe-component.component';
import { ParentComponent } from '../components/parent/parent.component';
import { ChildComponent } from '../components/child/child.component';
import { ReactiveFormComponent } from '../components/reactive-form/reactive-form.component';

export const routes: Routes = [
    {
        path:'service',
        component:ServiceComponent
    },
    {
        path:'dataBinding',
        component:DataBindingComponent
    },
    {
        path:'defaultdDirective',
        component:DefaultDirectivesComponent
    },
    {
        path:'pipeComponent',
        component:PipeComponentComponent
    },
    {
        path:'parent',
        component:ParentComponent
    },
    {
        path:'child',
        component:ChildComponent
    },
    {
        path:'reactive',
        component:ReactiveFormComponent
    },
];
