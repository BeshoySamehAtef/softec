import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() image: string = '';
  @Input() name:string = '';
  @Input() price:number=0;
  @Input() availability: number = 0;

}