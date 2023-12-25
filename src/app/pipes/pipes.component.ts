import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  name:string="Nilay"
  position:string= 'jr developer'
  learn:string = 'Angular'
  job:string="promount Technology"
  salary:number= 20000000
  currentdate = new Date()
  mynumber:number=12.242534646

  public example=[{
    "id":1,
    "name": 'Nilay',
  },
  {
    "id":2,
    "name": "Neel",
  },
  {
    "id":3,
    "name": "Ketan",
  },
  {
    "id":4,
    "name":"Rahul",
  },
]

}
