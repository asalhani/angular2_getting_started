import { Component } from '@angular/core';
import {ProductService} from './products/product.service'

@Component({
    selector: 'pm-app',
    template: ' <pm-products></pm-products> ',
    providers:[ProductService]
})
export class AppComponent { }
