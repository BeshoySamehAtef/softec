import { Component, Input } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { EditQuantityPopupComponent } from '../edit-quantity-popup/edit-quantity-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  constructor(private dialog: MatDialog) { }
  @Input() product: Product = new Product();

  editQuantity(product: Product): void {
    const dialogRef = this.dialog.open(EditQuantityPopupComponent, {
      panelClass: 'custom-dialog-container-popup',
      minWidth: '350px',
      width: '80vw',
      maxWidth: '800px',
      autoFocus: false,
      data: {
        product: product,
        title: 'Edit product quantity',
      },
    });
    dialogRef.afterClosed().subscribe((data) => {
      console.log(data, 'from subscribe')
    });
  }
}
