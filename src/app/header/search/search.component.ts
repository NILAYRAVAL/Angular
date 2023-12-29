import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  // providers: [ServiceService], //what to provide
})
export class SearchComponent implements OnInit {

  searchbox:string = ''
  
  updatesearchbox(event:any){
    this.searchbox = event.target.value
  }


  // How to provide Dependency
  constructor(private search: ServiceService){
  }  

  Onsubscribe(){
    // let search = new ServiceService();
    this.search.OnSubscribeClicked('monthly');
  }

  Onsubscribe2(){
    // let search = new ServiceService();
   this.search.OnSubscribeClicked('Yearly');
  }
  Onsubscribe3(){
    // let search = new ServiceService();
    this.search.OnSubscribeClicked('weekly');
  }

















  public example = [[{ "id": 5850679, "name": "Deeptiman Deshpande", "email": "deeptiman_deshpande@gleichner.test", "gender": "female", "status": "active" }, { "id": 5850678, "name": "Miss Prem Prajapat", "email": "miss_prajapat_prem@klocko-stiedemann.test", "gender": "male", "status": "active" }, { "id": 5850676, "name": "Sameer Naik", "email": "naik_sameer@hessel-barton.test", "gender": "male", "status": "active" }, { "id": 5850675, "name": "Upendra Namboothiri", "email": "upendra_namboothiri@romaguera.example", "gender": "female", "status": "active" }, { "id": 5850674, "name": "Nirbhay Embranthiri", "email": "embranthiri_nirbhay@prosacco-haley.example", "gender": "female", "status": "inactive" }, { "id": 5850673, "name": "Deeptimayee Kaul II", "email": "deeptimayee_ii_kaul@brown-grimes.test", "gender": "female", "status": "active" }, { "id": 5850672, "name": "Aaditya Nehru Ret.", "email": "nehru_aaditya_ret@stehr.example", "gender": "female", "status": "inactive" }, { "id": 5850671, "name": "Ganaka Desai", "email": "ganaka_desai@harber-nikolaus.test", "gender": "male", "status": "inactive" }, { "id": 5850670, "name": "Param Johar V", "email": "param_johar_v@grant.example", "gender": "male", "status": "inactive" }, { "id": 5850669, "name": "Sanya Embranthiri", "email": "sanya_embranthiri@goyette-kihn.test", "gender": "female", "status": "inactive" }]
]

// ngOnInit():void {
  
  // }
  
  
  
  
  
  userData:any
  users = new Array<any>();
  ngOnInit(): void {

    this.userData= [
      { "id": 5850679, "name": "Deeptiman Deshpande", "email": "deeptiman_deshpande@gleichner.test", "gender": "female", "status": "active" }, { "id": 5850678, "name": "Miss Prem Prajapat", "email": "miss_prajapat_prem@klocko-stiedemann.test", "gender": "male", "status": "active" }, { "id": 5850676, "name": "Sameer Naik", "email": "naik_sameer@hessel-barton.test", "gender": "male", "status": "active" }, { "id": 5850675, "name": "Upendra Namboothiri", "email": "upendra_namboothiri@romaguera.example", "gender": "female", "status": "active" }, { "id": 5850674, "name": "Nirbhay Embranthiri", "email": "embranthiri_nirbhay@prosacco-haley.example", "gender": "female", "status": "inactive" }, { "id": 5850673, "name": "Deeptimayee Kaul II", "email": "deeptimayee_ii_kaul@brown-grimes.test", "gender": "female", "status": "active" }, { "id": 5850672, "name": "Aaditya Nehru Ret.", "email": "nehru_aaditya_ret@stehr.example", "gender": "female", "status": "inactive" }, { "id": 5850671, "name": "Ganaka Desai", "email": "ganaka_desai@harber-nikolaus.test", "gender": "male", "status": "inactive" }, { "id": 5850670, "name": "Param Johar V", "email": "param_johar_v@grant.example", "gender": "male", "status": "inactive" }, { "id": 5850669, "name": "Sanya Embranthiri", "email": "sanya_embranthiri@goyette-kihn.test", "gender": "female", "status": "inactive" }
    ]
    
    this.search.getUsers().subscribe(response => {
      console.log(response)
        this.users = response;
    });
  }
}
