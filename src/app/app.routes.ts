import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"reactive",loadComponent:()=>import('../component/reactive-form/reactive-form.component').then(m=>m.ReactiveFormComponent)
    },
    {
        path:"service",loadComponent:()=>import('../component/service/service.component').then(m=>m.ServiceComponent)
    },
    {
        path:"controlflow",loadComponent:()=>import('../component/control-flow/control-flow.component').then(m=>m.ControlFlowComponent)     
    },
    {
        path:"databinding",loadComponent:()=>import('../component/data-binding/data-binding.component').then(m=>m.DataBindingComponent)
    },
    {
        path:"templatefrom",loadComponent:()=>import('../component/template-form/template-form.component').then(m=>m.TemplateFormComponent)
    },
    {
        path:"product",loadChildren:()=>import('../app/product/product.module').then(m=>m.ProductModule)
    }
   
];
