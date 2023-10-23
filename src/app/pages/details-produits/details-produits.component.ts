import { Component,OnInit} from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { Produit } from 'src/app/core/interfaces/models/produit';

@Component({
  selector: 'app-details-produits',
  templateUrl: './details-produits.component.html',
  styleUrls: ['./details-produits.component.css']
})
export class DetailsProduitsComponent  implements OnInit {
 
  listeProduits: Produit[] = [];
  produitId: number = 2;
  produitTrouve: Produit | undefined ;

  constructor(public productService: ProductsService) {}
  getProducts() {
    this.productService.getProductsFromJson().subscribe(
      (res: Produit[]) => {
        this.listeProduits = res;
        this.produitTrouve = this.getProduct(this.produitId);
        if (this.produitTrouve) {
          console.log(this.produitTrouve);
        } else {
          console.log('Aucun produit trouvé avec cet ID.');
        }
      },
      (err) => {
        alert('Failed loading JSON data');
      }
    );
  }
  

  getProduct(id: number): Produit | undefined {
    if (this.listeProduits) {
      return this.listeProduits.find((produit) => produit.id === id);
    } else {
      return undefined;
    }
  }
  ngOnInit(): void {
    this.getProducts();
  }
}
