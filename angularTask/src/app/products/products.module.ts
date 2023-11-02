import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SharedModule } from '../shared/shared.module';
import { EditQuantityPopupComponent } from './components/edit-quantity-popup/edit-quantity-popup.component';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductCardComponent,
    EditQuantityPopupComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
