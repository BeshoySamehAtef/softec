import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/_services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders:any[]=[];

  constructor(private orderService: OrderService) {
    
  }

  ngOnInit(): void {
    this.fetchData()
  }

  // fetch orders data
  fetchData() {
    this.orderService.getOrders().subscribe(data => {
      console.log(data);
      this.orders = data
      // Handle the retrieved JSON data here
    });
  }
}
