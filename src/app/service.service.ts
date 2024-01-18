import { Injectable } from '@angular/core';
// <<<<<<< Services-Get-Data
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// =======

// >>>>>>> main

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  OnSubscribeClicked(data:String){
    alert('Thank you for your '+data+' subscription.');
  }


// <<<<<<< Services-Get-Data



  constructor(private http: HttpClient) { }

  //Http Client get method
  public getUsers(): Observable<any> {
  const url = 'https://gorest.co.in/public/v2/users';
  return this.http.get<any>(url);
}
}
// =======
}



// >>>>>>> main
