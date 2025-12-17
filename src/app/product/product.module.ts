import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { FinishedComponent } from './finished/finished.component';
import { RowComponent } from './row/row.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FinishedComponent,
    RowComponent

  ]
})
export class ProductModule { }
