import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Classreservation } from '../classreservation';
import { ServiceEmployeeService } from '../services/service-employee.service';
import { ServiceReservationService } from '../services/service-reservation.service';
import { ServicesalleService } from '../services/servicesalle.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
 salles:any;
 employees:any;
  newreserv: Classreservation ={
    date_d:undefined,
    date_f:undefined,
    employee:{
      id:0,
    },
     salle:{
      id:0,
    }

  };  

  
  constructor(private serviceresv: ServiceReservationService, private salle: ServicesalleService,private empserv: ServiceEmployeeService, private router:Router) { }

  ngOnInit() {
    this.salle.getsalle().subscribe((data: any) => {
      this.salles= data;
      console.log(this.salles);
      
    });
    this.empserv.getEmployee().subscribe((data: any) => {
      this.employees= data;
      console.log(this.employees);
      
    });
  }
  
  addreservation(){
    this.serviceresv.addreservation(this.newreserv).subscribe(()=>{
      alert('Reservation ajouter avec succer');
      
      },
      (error)=> {
        console.error('error',error);
        alert('error')
      }
      );

  }

}
