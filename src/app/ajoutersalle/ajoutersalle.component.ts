import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Salle } from '../salle';
import { ServiceservService } from '../services/serv';
import { ServicesalleService } from '../services/servicesalle.service';

@Component({
  selector: 'app-ajoutersalle',
  templateUrl: './ajoutersalle.component.html',
  styleUrls: ['./ajoutersalle.component.css']
})
export class AjoutersalleComponent {
  newsalle : Salle ={
    nom	:'',
    nombre_place	:0
  };
 

  constructor(private servicesalle: ServicesalleService , private router:Router) { }

  
  
  addsalle(){
    this.servicesalle.addsalle(this.newsalle).subscribe(()=>{
      alert('ajouter avec succer');
      
      },
      (error)=> {
        console.error('error ajout !! ',error);
        alert('error ajout !! ')
      }
      );

  }


}
