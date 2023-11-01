import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/Product";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit{
  constructor(private  productS: ProductService) {
  }

  public ListProduct:Product[] = this.productS.getAllProducts();

  ngOnInit(): void {
  }

  calculatedLabel: string = ' ';
  calculatedCount: number = 0;

  calculateProductsByLabel(label: string) {
    this.calculatedLabel = label;
    this.calculatedCount = this.productS.getNbProductsByLibelle(label);
  }
}
