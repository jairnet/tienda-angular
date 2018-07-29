import { Component, OnInit } from '@angular/core';
import { ProductService, Product} from '../../service/product.service';
import { subscribeOn} from 'rxjs/operators';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  data : Product[] = [];
  loading = false;

  constructor(
    service: ProductService,
  ) {
    this.loading = true;
    service.loadProduct()
    .pipe(
      finalize(() => this.loading = false )
    )
    .subscribe(x => this.data = x, err => console.log(err))
   }

  ngOnInit() {
  }


  goToCheckout(){
    
  }
}
