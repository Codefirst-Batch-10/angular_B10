import { Routes, RouterOutlet } from '@angular/router';
import { ServiceComponent } from '../components/service/service.component';
import { DataBindingComponent } from '../components/data-binding/data-binding.component';
import { DefaultDirectivesComponent } from '../components/default-directives/default-directives.component';
import { PipeComponentComponent } from '../components/pipe-component/pipe-component.component';
import { ParentComponent } from '../components/parent/parent.component';
import { ChildComponent } from '../components/child/child.component';
import { ReactiveFormComponent } from '../components/reactive-form/reactive-form.component';
import { FormReactiveComponent } from '../components/form-reactive/form-reactive.component';

export const routes: Routes = [
    {
        path: 'service',
        loadComponent: () => import('../components/service/service.component').then(m => m.ServiceComponent)
    },
    {
        path: 'dataBinding',
        loadComponent: () => import('../components/data-binding/data-binding.component').then(m => m.DataBindingComponent)
    },
    {
        path: 'defaultDirective',
        loadComponent: () =>
            import('../components/default-directives/default-directives.component')
                .then(m => m.DefaultDirectivesComponent)
    },
    {
        path: 'pipeComponent',
        loadComponent: () =>
            import('../components/pipe-component/pipe-component.component')
                .then(m => m.PipeComponentComponent)
    },
    {
        path: 'parent',
        loadComponent: () =>
            import('../components/parent/parent.component')
                .then(m => m.ParentComponent)
    },
    {
        path: 'child',
        loadComponent: () =>
            import('../components/child/child.component')
                .then(m => m.ChildComponent)
    },
    {
        path: 'reactive',
        loadComponent: () =>
            import('../components/reactive-form/reactive-form.component')
                .then(m => m.ReactiveFormComponent)
    },
    {
        path: 'formReactive',
        loadComponent: () => import('../components/form-reactive/form-reactive.component').then(m => m.FormReactiveComponent)
    },
    {
        path: 'dyanamicForm',
        loadComponent: () =>
            import('../components/dyanamic-form/dyanamic-form.component')
                .then(m => m.DyanamicFormComponent)
    },{
        path: 'childRform',
        loadComponent: () => import('../components/form-react-child/form-react-child.component').then(m => m.FormReactChildComponent)
    },
    // { path:'serviceComp', loadComponent:()=> import('../components/service/service.component').then(m=>m.ServiceComponent)},

];
