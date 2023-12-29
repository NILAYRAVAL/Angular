import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  OnSubscribeClicked(data:String){
    alert('Thank you for your '+data+' subscription.');
  }


}



