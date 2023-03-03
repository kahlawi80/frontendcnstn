import { Component } from '@angular/core';
import { ServiceservService } from '../services/serv';


  
@Component({
  selector: 'app-listservice',
   templateUrl:'./Listservice.component.html',
  styleUrls: ['./listservice.component.css']
})
export class ListserviceComponent {
  services: any[] = [];
  constructor(private service  : ServiceservService){
    service.getServices().subscribe((data: any) => {
      this.services = data;
    });
  }


  getservice() {
    this.service.getServices().subscribe((data: any) => {
      this.services = data;
    });
  }

   deleteservice(id: number) {
    this.service.Deleteserv(id).subscribe(() => {
      this.getservice();
    });
     
    }


}


