import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AddserviceComponent } from './addservice/addservice.component';
import { AdministrationComponent } from './administration/administration.component';
import { ListadministrationComponent } from './listadministration/listadministration.component';
import { ListserviceComponent } from './listservice/listservice.component';


const routes: Routes = [

  { path: 'acceuil-component', component: AcceuilComponent },
  { path: 'addcat', component: AdministrationComponent },
  { path: 'listcat', component: ListadministrationComponent },
  { path: 'addserv', component: AddserviceComponent },
  { path: 'listserv', component: ListserviceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
