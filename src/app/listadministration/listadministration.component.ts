import { Component } from '@angular/core';
import { ServicemanagementService } from '../services/Servicemanagement.service';

@Component({
  selector: 'app-listadministration',
  templateUrl: './listadministration.component.html',
  styleUrls: ['./listadministration.component.css']
})
export class ListadministrationComponent {
  
 


  directions: any[] = [];
  id : any;
  constructor(private servicemanagement : ServicemanagementService){
    servicemanagement.getDirections().subscribe((data: any) => {
      this.directions = data;
    });
    servicemanagement.deletedir(this.id).subscribe();
  }

}

