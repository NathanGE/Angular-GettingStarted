import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detial';
  product: IProduct;
  constructor() { }

  ngOnInit() {
  }

}
