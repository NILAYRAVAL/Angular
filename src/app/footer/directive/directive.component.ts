import { Component } from '@angular/core';

@Component({
  selector: 'directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  mainMenu:string[]= ['User-1', 'User-2', 'User-3', 'User-4'];

  searching:string=""

  updatesearching(event:any){
    this.searching=(event.target.value)
  }
  
}
