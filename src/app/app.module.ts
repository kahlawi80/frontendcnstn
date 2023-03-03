import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AdministrationComponent } from './administration/administration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListadministrationComponent } from './listadministration/listadministration.component';
import { AddserviceComponent } from './addservice/addservice.component';
import { ListserviceComponent } from './listservice/listservice.component';

import { AjoutemployeeComponent } from './ajoutemployee/ajoutemployee.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { AjoutersalleComponent } from './ajoutersalle/ajoutersalle.component';
import { ListsalleComponent } from './listsalle/listsalle.component';
import { ReservationComponent } from './reservation/reservation.component';
import { DemandematComponent } from './demandemat/demandemat.component';
import { ListedemandeComponent } from './listedemande/listedemande.component';
import { UpadatedirComponent } from './upadatedir/upadatedir.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AcceuilComponent,
    AdministrationComponent,
    ListadministrationComponent,
    AddserviceComponent,
    ListserviceComponent,
    AjoutemployeeComponent,
    ListemployeeComponent,
    AjoutersalleComponent,
    ListsalleComponent,
    ReservationComponent,
    DemandematComponent,
    ListedemandeComponent,
    UpadatedirComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
