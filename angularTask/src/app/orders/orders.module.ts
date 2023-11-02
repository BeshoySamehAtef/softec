import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './components/orders-list/orders.component';
import { OrderCardComponent } from './components/order-card/order-card.component';
import { SharedModule } from '../shared/shared.module';
import { OrderDetailsComponent } from './components/order-details/order-details.component';


@NgModule({
  declarations: [
    OrdersComponent,
    OrderCardComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule
  ]
})
export class OrdersModule { }
