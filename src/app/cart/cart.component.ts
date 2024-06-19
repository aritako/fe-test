import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: any[];
  constructor() {
    const cartItemsString = localStorage.getItem('cartItems');
    this.cartItems = cartItemsString ? JSON.parse(cartItemsString) : [];
  }
  remove(id: string){
    this.cartItems = this.cartItems.filter(item => item.product_id !== id);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
  decrement(id: string){
    const item = this.cartItems.find(item => item.product_id === id);
    if (item) {
      item.quantity -= 1;
    }
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
  increment(id: string){
    const item = this.cartItems.find(item => item.product_id === id);
    if (item) {
      item.quantity += 1;
    }
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

}
