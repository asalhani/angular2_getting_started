import {Component} from '@angular/core'
import {IProduct} from './product'
import {ProductService} from './product.service'

@Component({
    moduleId: module.id,
    selector: "pm-products",
    templateUrl:"product-list.component.html",
})
export class ProductListComponent{

    constructor(private _productService : ProductService){

    }

    pageTitle:string = "List of Products";
    listFilter:string = "";
    showImage:boolean = true;
    imageHeigh :number = 30;
    imageWidth :number = 30;
    imageMargin: number = 2;

    toggleImage():void{
        this.showImage = !this.showImage;
    }
    products: IProduct[] = this._productService.getProducts();
}