// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'softec';
// }


import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './_services/product.service';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="fetchData()">Fetch Data</button>
  `
})
export class AppComponent {
  constructor(private productService: ProductService) {}

  fetchData() {
    this.productService.getProducts().subscribe(data => {
      console.log(data);
      // Handle the retrieved JSON data here
    });
  }
}