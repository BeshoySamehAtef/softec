import { Product } from "./product.model";

export class Order {
    OrderId: number=0;
    OrderDate: Date = new Date();
    UserId: string='';
    Products: OrderProduct[] = [];
    PaymentType: string = '';
    ProductsDetails: Product[] = [];
    totalPrice: number = 0;
}

export class OrderProduct {
    ProductId: number = 0;
    Quantity: number = 0;
}