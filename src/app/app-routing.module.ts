import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AddserviceComponent } from './addservice/addservice.component';
import { AdministrationComponent } from './administration/administration.component';
import { ListadministrationComponent } from './listadministration/listadministration.component';
import { ListserviceComponent } from './listservice/listservice.component';

import { AjoutemployeeComponent } from './ajoutemployee/ajoutemployee.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { AjoutersalleComponent } from './ajoutersalle/ajoutersalle.component';
import { ListsalleComponent } from './listsalle/listsalle.component';
import { ReservationComponent } from './reservation/reservation.component';
import { DemandematComponent } from './demandemat/demandemat.component';
import { ListedemandeComponent } from './listedemande/listedemande.component';
import { UpdatedirComponent } from './updatedir/updatedir.component';
import { FormComponent } from './form/form.component';
import { FormDSCComponent } from './formDSC.component/formDSC.component';
import { FormDVPSComponent } from './formDVPS.component/formDVPS.component';
import { FormguidesComponent } from './formguides/formguides.component';
import { FormlogicielsComponent } from './formlogiciels/formlogiciels.component';
import { FormDSINComponent } from './formDSIN.component/formDSIN.component';



const routes: Routes = [

  { path: 'acceuil-component', component: AcceuilComponent },
  { path: 'addcat', component: AdministrationComponent },
  { path: 'listcat', component: ListadministrationComponent },

  { path: 'addserv', component: AddserviceComponent },
  { path: 'listserv', component: ListserviceComponent},
  { path: 'ajoutemployee', component: AjoutemployeeComponent},
  {path:'listempl', component:ListemployeeComponent},
  {path:'ajoutesalle',component:AjoutersalleComponent},
  {path:'listsalle',component:ListsalleComponent},
  {path:'addreservation', component:ReservationComponent},
  {path:'demandemat', component:DemandematComponent},
  {path:'listdem', component:ListedemandeComponent},
  {path:'updir', component:UpdatedirComponent},
  {path:'formDG',component:FormComponent},
  {path:'formdsc',component:FormDSCComponent},
  {path:'formdvps', component:FormDVPSComponent},
  {path:'formGuides', component:FormguidesComponent},
  {path:'formLogiciels',component:FormlogicielsComponent},
  {path:'formdsin',component:FormDSINComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
