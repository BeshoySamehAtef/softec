import { Inject, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Customer } from 'src/app/_models/customer.model';
import { Order } from 'src/app/_models/order.model';
import { CustomerService } from 'src/app/_services/customer.service';

export interface DialogData {
  title: string,
  order: Order,
}

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  errorMsg = '';
  customer: Customer = new Customer();

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private dialog: MatDialog, private customerService: CustomerService) {

    console.log(data)
  }

  ngOnInit(): void {
    this.customerService.getCustomerById(this.data.order.UserId).subscribe({
      next:(data: Customer)=>{
        console.log(data)
        this.customer = data
      }
    })
  }

  // close popup
  close() {
    this.dialog.closeAll();
  }
}