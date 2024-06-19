import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css'
})
export class AddToCartComponent {
  @Input() id!: any;
  @Input() product!: any;
  ngOnInit(){
    console.log("THIS PRODUCT =>", this.id, this.product);
  }
  quantity = 1;
  addToCart() {
    const cartItems: { product_id: string, quantity: number }[] = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const existingItem = cartItems.find(cartItem => cartItem.product_id === this.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({ product_id: this.id, quantity: 1 });
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    alert('Added to cart: ' + this.id);
  }
}
