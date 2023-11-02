import { Inject } from '@angular/core';
import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/app/_services/product.service';
import { Order } from 'src/app/_models/order.model';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent {
  errorMsg = '';



  constructor(@Inject(MAT_DIALOG_DATA) public data: Order, private dialog: MatDialog, private productService: ProductService, private fb: FormBuilder) {
  }


  // close popup
  close() {
    this.dialog.closeAll();
  }
}