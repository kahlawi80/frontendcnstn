import { Component } from '@angular/core';
import { ServiceEmployeeService } from '../services/service-employee.service';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent {

  employees: any[] = [];
  constructor(private servicemp: ServiceEmployeeService) {
    this.getemployee();
  }

  getemployee() {
    this.servicemp.getEmployee().subscribe((data: any) => {
      this.employees = data;
    });
  }

  deleteemp(id: number, nom:string) {
    if(confirm("Etes vous sur de supprimer cet utilisateur "+nom)) {
    
    this.servicemp.deleteemp(id).subscribe(() => {
      this.getemployee();
    });
  }
  }
}


