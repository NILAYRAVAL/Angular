import { Component } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchbox:string = ''
  
  updatesearchbox(event:any){
    this.searchbox = event.target.value
  }
}
