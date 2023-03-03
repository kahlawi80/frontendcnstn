import { Component } from '@angular/core';
import { ServicesalleService } from '../services/servicesalle.service';

@Component({
  selector: 'app-listsalle',
  templateUrl: './listsalle.component.html',
  styleUrls: ['./listsalle.component.css']
})
export class ListsalleComponent {


  

   salles: any[] = [];
  constructor(private servicesalle : ServicesalleService){
    servicesalle.getsalle().subscribe((data: any) => {
      this.salles = data;
    });
    
  }
  getDirections() {
    this.servicesalle.getsalle().subscribe((data: any) => {
      this.salles= data;
    });
  }

   deleteExpense(id: number , nom:string) {
    if(confirm("Etes vous sur de supprimer cet utilisateur "+nom)) {
    this.servicesalle.deletesalle(id).subscribe(() => {
      this.getDirections();
    });
     
    }
   }

}
