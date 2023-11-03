import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Order } from 'src/app/_models/order.model';
import { OrderDetailsComponent } from '../order-details/order-details.component';


@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent {
  constructor(private dialog: MatDialog) { }
  @Input() order: Order = new Order();

  showDetails(order: Order): void {
    const dialogRef = this.dialog.open(OrderDetailsComponent, {
      panelClass: 'custom-dialog-container-popup',
      minWidth: '350px',
      width: '80vw',
      maxWidth: '800px',
      autoFocus: false,
      data: {
        order: order,
        title: 'Order Details',
      },
    });
  }
}
