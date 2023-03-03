import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empl } from '../empl';
import { Serv } from '../serv';
import { ServiceservService } from '../services/serv';
import { ServiceEmployeeService } from '../services/service-employee.service';

@Component({
  selector: 'app-ajoutemployee',
  templateUrl: './ajoutemployee.component.html',
  styleUrls: ['./ajoutemployee.component.css']
})

export class AjoutemployeeComponent {
 services:any;
  newempl: Empl={
    id:0,
    adresse:'',
    cin:0,
    matricule:0,
    nom: '',
    poste:'',
    prenom:'',
    tel:0,
    service: {id:0}
  };

  constructor(private serv: ServiceservService, private servempl: ServiceEmployeeService, private router:Router) { }

  ngOnInit() {
    this.serv.getServices().subscribe((data: any) => {
      this.services= data;
      console.log(this.services);
      
    });
  }
  
  addemployee(){
    this.servempl.addempl(this.newempl).subscribe(()=>{
      alert('ajouter avec succer');
      //this.router.navigateByUrl('/listemp');
      },
      (error)=> {
        console.error('error',error);
        alert('error')
      }
      );

  }

}
