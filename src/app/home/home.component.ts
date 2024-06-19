import { Component, Input } from '@angular/core';
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
  constructor(private route: ActivatedRoute) {}
}
