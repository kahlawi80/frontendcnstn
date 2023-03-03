import { Component } from '@angular/core';
import { ServiceDemandematService } from '../services/service-demandemat.service';

@Component({
  selector: 'app-listedemande',
  templateUrl: './listedemande.component.html',
  styleUrls: ['./listedemande.component.css']
})
export class ListedemandeComponent {


  demandes: any[] = [];
  constructor(private servicedemande : ServiceDemandematService){
    servicedemande.getdemande().subscribe((data: any) => {
      this.demandes = data;
    });
    
  }
  getdemande() {
    this.servicedemande.getdemande().subscribe((data: any) => {
      this.demandes= data;
    });
  }

  deletedemande(id: number , nom:string) {
    if(confirm("Etes vous sur de supprimer cet demande " + nom)) {
    this.servicedemande.deletedemande(id).subscribe(() => {
      this.getdemande();
    });
     
    }
   }




}
