import {Component, OnInit} from '@angular/core'
import {IProduct} from './product'
@Component({
    moduleId: module.id,
    selector:'pm-products',
    templateUrl: 'product-list.component.html',
    styleUrls:['product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle:string = 'Product List';
    imageWidth:number = 60;
    imageHeight:number = 60;
    imageMargin:number = 2;
    showImage:boolean = false;
    listFilter:string = "cart";

    toggleImages(): void{
        this.showImage = !this.showImage;
    }

    products: IProduct[] = [
    {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    }];  

     ngOnInit(){
        console.log("message from ngOnInint");
    }
}