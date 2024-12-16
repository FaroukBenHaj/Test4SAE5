import { Component } from '@angular/core';
import { Product } from '../../core/models/product';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product-component',
  templateUrl: './add-product-component.component.html',
  styleUrls: ['./add-product-component.component.css']
})
export class AddProductComponentComponent {
 
  Product : FormGroup = new FormGroup({
    name: new FormControl('', []),
    description: new FormControl('', []),
    price: new FormControl('', []),
    available: new FormControl('', []),
    likes: new FormControl('', []),
  })
}
