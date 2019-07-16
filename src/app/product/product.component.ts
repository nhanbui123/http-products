import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {RestService} from '../services/rest.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: any = []
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private restService: RestService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    return this.restService.getProducts().subscribe(
      (data:{})=>{
        console.log(data);
        this.products = data
      }
    )
  }

  add() {
    this.router.navigate(['/product-add']);
  }

  delete(id) {

  }

}
