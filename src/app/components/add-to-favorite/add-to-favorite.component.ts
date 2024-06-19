import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-to-favorite',
  standalone: true,
  imports: [],
  templateUrl: './add-to-favorite.component.html',
  styleUrl: './add-to-favorite.component.css',
})
export class AddToFavoriteComponent {
  @Input() id!: any;
  @Input() product!: any;
  ngOnInit() {
    console.log('THIS PRODUCT =>', this.id, this.product);
  }
  quantity = 1;
  addToFavorite() {
    const favoriteItems: { product_id: string }[] = JSON.parse(
      localStorage.getItem('favoriteItems') || '[]'
    );
    const existingItem = favoriteItems.find(
      (favoriteItem) => favoriteItem.product_id === this.id
    );
    if (existingItem) {
      alert(this.product.name + ' is already in favorites');
    } else {
      favoriteItems.push({ product_id: this.id });
      localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
      alert('Added to favorites: ' + this.product.name);
    }
  }
}
