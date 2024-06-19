import { Component, Input, Output, EventEmitter } from '@angular/core';
import products from '../products';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { GoToCartComponent } from '../components/go-to-cart/go-to-cart.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, RouterModule, GoToCartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @Input() products: any[] = products;
  chosenType: string = 'Popular';
  types: string[] = [
    'Popular',
    ...new Set(products.map((product) => product.type)),
  ];

  handleClick(chosenType: string) {
    console.log(chosenType);
    this.chosenType = chosenType;
  }
  ngOnInit() {}
}
