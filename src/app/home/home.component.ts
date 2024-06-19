import { Component, Input, Injectable } from '@angular/core';
import products from '../products';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @Input() products: any[] = products;

  // constructor(private route: ActivatedRoute) {}

  // products$!: Observable<any>;
  // selectedId!: number;

  // ngOnInit() {
  //   this.products$ = this.route.paramMap.pipe(
  //     switchMap((params) => {
  //       this.selectedId = Number(params.get('id'));
  //       for (const product of this.products) {
  //         if (product.id === this.selectedId) {
  //           return product;
  //         }
  //       }
  //     })
  //   );
  // }
}
