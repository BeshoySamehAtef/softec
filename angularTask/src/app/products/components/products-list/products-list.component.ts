import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../_services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit{

  products:any[]=[];

  constructor(private productService: ProductService) {
    
  }

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData() {
    this.productService.getProducts().subscribe(data => {
      console.log(data);
      this.products = data
      // Handle the retrieved JSON data here
    });
  }
}
