import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-service',
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

  productList: any;
  imageList:any;
  constructor(private _authService: AuthService, private _getProduct: ProductService) { }

  ngOnInit() {
    this._authService.getUserList().subscribe((res) => {
      console.log(res);
    });

    {
      this._getProduct.getImage().subscribe((data:any)=>{
        this.imageList=data.products
      })
    }


    const service = this._authService.addition(10, 20);
    console.log(service);

    {
      this._getProduct.getProductList().subscribe((res: any) => {
        this.productList = res

      })
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

}
function getProduct() {
  throw new Error('Function not implemented.');
}

