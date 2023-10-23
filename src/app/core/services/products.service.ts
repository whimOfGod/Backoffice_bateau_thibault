import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/core/interfaces/models/produit';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProductsFromJson(): Observable<any> {
    return this.http.get<Produit[]>('../../assets/data/Products.json'); 
  }
}
