import { Component, Input } from '@angular/core';
import products from '../products';
@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css',
})
export class FavoriteComponent {
  @Input() products: any[] = products;
  favoriteItemsString = localStorage.getItem('favoriteItems');
  favoriteItemIds: any = [];

  ngOnInit() {
    for (const favoriteItem of JSON.parse(this.favoriteItemsString || '[]')) {
      this.favoriteItemIds.push(favoriteItem.product_id);
      console.log(this.favoriteItemIds);
    }
    // for (const product in products) {
    //   // if (this.favoriteItemIds.includes(product.product_id)) {
    //   console.log(product.product_id);
    //   // }
    // }
  }
}
