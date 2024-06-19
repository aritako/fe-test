import { Component, Input, Output, EventEmitter } from '@angular/core';
import products from '../products';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { GoToCartComponent } from '../components/go-to-cart/go-to-cart.component';
import { RouterModule } from '@angular/router';
import { AddToCartComponent } from '../components/add-to-cart/add-to-cart.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProductCardComponent,
    RouterModule,
    GoToCartComponent,
    AddToCartComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @Input() products: any[] = products;
  chosenType: string = 'Popular';
  cart = localStorage.getItem('cartItems');
  cartQuantity = JSON.parse(this.cart || '[]')[0].quantity;

  types: string[] = [
    'Popular',
    ...new Set(products.map((product) => product.type)),
  ];

  handleClick(chosenType: string) {
    console.log(chosenType);
    this.chosenType = chosenType;
    this.cart = localStorage.getItem('cartItems');
    this.cartQuantity = JSON.parse(this.cart || '[]')[0].quantity;
  }
  ngOnInit() {
    console.log(this.cartQuantity);
  }
}
