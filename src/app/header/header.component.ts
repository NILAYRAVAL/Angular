import { Component } from '@angular/core';
//<<<<<<< 2-learn-about-data-binding
//=======
import { ServiceService } from '../service.service';
//>>>>>>> main

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
//<<<<<<< 2-learn-about-data-binding
  styleUrls: ['./header.component.css']
//=======
  styleUrls: ['./header.component.css'],
  // providers: [ServiceService],
//>>>>>>> main
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
//<<<<<<< 2-learn-about-data-binding
//=======
  
  constructor(private search:ServiceService){

  }

  BuyNow(){
    // let create = new ServiceService();
   this.search.OnSubscribeClicked('4%');
  }
//>>>>>>> main
}
