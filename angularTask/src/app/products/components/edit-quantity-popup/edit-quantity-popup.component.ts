import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/product.service';

export interface DialogData {
  title: string,
  product: Product,
}
@Component({
  selector: 'app-edit-quantity-popup',
  templateUrl: './edit-quantity-popup.component.html',
  styleUrls: ['./edit-quantity-popup.component.scss']
})
export class EditQuantityPopupComponent implements OnInit {

  errorMsg = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private dialog: MatDialog, private productService: ProductService, private fb: FormBuilder) {
  }

  editForm = this.fb.group({
    quantity: [this.data.product.AvailablePieces, Validators.required],
  });

  ngOnInit(): void {
  }

  // close popup
  close() {
    this.dialog.closeAll();
  }

  // submit form
  onSubmit() {

    if (this.editForm.invalid) {
      return;
    }

    this.productService.editProductQuantity(this.data.product.ProductId, this.editForm.controls['quantity'].value!).subscribe(
      {
        next: () => {
        }
      }
    )
  }

}
