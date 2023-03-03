import { Component } from '@angular/core';
import { Management } from '../management';
import { ServicemanagementService } from '../services/Servicemanagement.service';

@Component({
  selector: 'app-listadministration',
  templateUrl: './listadministration.component.html',
  styleUrls: ['./listadministration.component.css']
})
export class ListadministrationComponent {
  

  condition: boolean=false;
  dirdetails: any;
 


  directions: any[] = [];
  constructor(private servicemanagement : ServicemanagementService){
    servicemanagement.getDirections().subscribe((data: any) => {
      this.directions = data;
    });
    
  }
  getDirections() {
    this.servicemanagement.getDirections().subscribe((data: any) => {
      this.directions = data;
    });
  }

   deleteExpense(id: number) {
    this.servicemanagement.deletedir(id).subscribe(() => {
      this.getDirections();
    });
     
    }
    dirDetails(id: number){
      this.condition=true;
      this.servicemanagement.getDirectionById(id).subscribe((data: any) => {
        console.log(data);
        this.dirDetails=data;
        
      });

    }
    update(){

    }

      
      }

 

