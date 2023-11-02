import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/_services/order.service';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders:any[]=[];

  constructor(private orderService: OrderService,private productService:ProductService) {
    
  }

  ngOnInit(): void {
    this.fetchData()
  }

  // fetch orders data
  fetchData() {
    this.orderService.getOrders().subscribe(data => {
      this.orders = data
      this.orders.forEach(order => {
        let products: any[] = [];
        let totalPrice=0;
        order.Products.forEach((product: { ProductId: number; Quantity:number}) => {
          this.productService.getProductById(product.ProductId).subscribe({
            next:(data)=>{
              totalPrice = totalPrice + this.totalPriceFn(data.ProductPrice , product.Quantity)
              products.push(data)
              order.totalPrice=totalPrice
            }
          })

        });
        order.ProductsDetails = products; 
        console.log(this.orders,' new orders')
      });
      // Handle the retrieved JSON data here
    });
  }

 totalPriceFn(quantity: number, price: number) {
    return quantity * price
  }

}
