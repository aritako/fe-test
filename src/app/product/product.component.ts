import { Component, Input } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import products from '../products';
import { Observable } from 'rxjs';
import { AddToCartComponent } from '../components/add-to-cart/add-to-cart.component';
import { AddToFavoriteComponent } from '../components/add-to-favorite/add-to-favorite.component';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule, AddToCartComponent, AddToFavoriteComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() product: any;
  products: any[] = products;
  id!: string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.product = this.getProductById(this.id);
    });
    console.log(this.product);
  }

  getProductById(id: string | null): any {
    for (const product of this.products) {
      if (product.product_id === id) {
        return product;
      }
    }
    return null;
  }
}
