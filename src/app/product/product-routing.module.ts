import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RowComponent } from './row/row.component';
import { FinishedComponent } from './finished/finished.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'row',
    pathMatch: 'full'
  },
  {
    path: 'row',
    component: RowComponent
  },
  {
    path:'finished',
    component:FinishedComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
