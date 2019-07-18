import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../../types/product';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss']
})
export class ShelfComponent implements OnInit {
  products : Product[];

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
