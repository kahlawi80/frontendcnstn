import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Serv } from '../serv';
import { ServiceservService } from '../services/serv';
import { ServicemanagementService } from '../services/Servicemanagement.service';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})
export class AddserviceComponent {
  directions: any;

  newserv : Serv = {
    
    description: '',
    nom: '',
    direction:  { id : 0} 
    
  };
  constructor(private Service: ServiceservService, private servicemanagement: ServicemanagementService ,private router:Router) { }
  ngOnInit() {
    this.servicemanagement.getDirections().subscribe((data: any) => {
      this.directions = data;
      console.log(this.directions);
      
    });
  
  }
  
  
addservice(){
  this.router.navigateByUrl('/listserv')
  this.Service.addservice(this.newserv).subscribe(() => {
    console.log(this.newserv)
    alert('Form submitted successfully');
    console }, (error) => {
    console.error('Error submitting form', error);
    alert('Error submitting form');
  });

}
}



