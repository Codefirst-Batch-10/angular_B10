import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { ChildComponent } from "../child/child.component";
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service',
  imports: [CommonModule, ChildComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
})
export class ServiceComponent {


  productList: any;
  num = 100;
  imageList: any;
  // subscription!: Subscription;

  constructor(private _authService: AuthService, private _getProduct: ProductService, private activatedRoute: ActivatedRoute) { }



   ngOnInit() {
    this.activatedRoute.queryParams.subscribe((param) => {
      if(param['isValidData'] == 'true') {
        this._authService.getUserList().subscribe((res) => {
          console.log(res);
        });
      }
    });
  
    

    {
      this._getProduct.getImage().subscribe((data: any) => {
        this.imageList = data.products
      })
    }


    // const service = this._authService.addition(10, 20);
    // console.log(service);

    {
      this._getProduct.getProductList().subscribe((res: any) => {
        this.productList = res

      });
    }

  }

  productData: {
    name: string;
    brand: string;
    price: string;
  }[] | undefined;

  getProductData() {
    this.productData = this._authService.getProductData()
    console.log(this.productData);


  }
 

  ngOnDestroy() {
    this.num = 0;
    // this.subscription.unsubscribe();
  }
}
function getProduct() {
  throw new Error('Function not implemented.');
}

