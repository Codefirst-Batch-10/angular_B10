import { Routes } from '@angular/router';

export const routes: Routes = [
    { path:'', loadComponent: ()=> import('../components/data-binding/data-binding.component').then(m=>m.DataBindingComponent)},
    { path:'pipe', loadComponent:()=> import('../components/pipe-component/pipe-component.component').then(m=>m.PipeComponentComponent)},
    { path:'reactive', loadComponent:()=> import('../components/reactive-form/reactive-form.component').then(m=>m.ReactiveFormComponent)},
    { path:'parent', loadComponent:()=> import('../components/parent/parent.component').then(m=>m.ParentComponent)}
];
