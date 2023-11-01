import { Injectable } from '@angular/core';
import {Product} from "../../model/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  Products : Product[] = [
      { id: 1, code: 127,libelle: "PC", prixunitaire : 2000, tauxTva :10},
      { id: 2, code: 128,libelle: "TV", prixunitaire : 1000, tauxTva :20},
      { id: 3, code: 128,libelle: "Table", prixunitaire : 200, tauxTva :30},
  ];
  constructor() { }

  public getAllProducts():Product[]{
    return this.Products;
  }
  getNbProductsByLibelle(libelle: string): number {
    return this.Products.filter(product => product.libelle === libelle).length;
  }
}
