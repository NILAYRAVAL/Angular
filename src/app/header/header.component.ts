import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

 product = {
  name  : 'iphone 12 pro',
  price: 100,
  color: 'green',
  instock: 3,
  pimage: 'src/assets/iphone.avif'
}

discount:number = 5
addvalue:number = 0

discountPrice(){
  return(
  ('$'+ " "+ (this.product.price - (this.product.price *this. discount /100)))
  )}

  decrement(){
    if (this.addvalue>0) {      
      this.addvalue--
    }
  }
  increment(){
    if (this.addvalue <this.product.instock) {
      this.addvalue++
    }
  }
}
