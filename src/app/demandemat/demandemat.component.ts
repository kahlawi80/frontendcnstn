import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Demandemat } from '../demandemat';
import { ServiceDemandematService } from '../services/service-demandemat.service';
import { ServiceEmployeeService } from '../services/service-employee.service';
import { ServiceReservationService } from '../services/service-reservation.service';

@Component({
  selector: 'app-demandemat',
  templateUrl: './demandemat.component.html',
  styleUrls: ['./demandemat.component.css']
})
export class DemandematComponent {
  employees:any;
     newdemande:Demandemat={
      id:0,
      date_demmande:undefined,
      materiel_demmander:'',
      employee:{
       
        }	
     } 
   constructor(private servicedemande: ServiceDemandematService, private empserv: ServiceEmployeeService, private router:Router) { }
 
   ngOnInit() {
     this.empserv.getEmployee().subscribe((data: any) => {
       this.employees= data;
       console.log(this.employees);
       
     });
   }
   
     adddemande(){
     this.servicedemande.adddemande (this.newdemande).subscribe(()=>{
       alert('Damande ajouter ');
       
       },
       (error)=> {
         console.error('error',error);
         alert('error')
       }
       );
 
   }
 




}
