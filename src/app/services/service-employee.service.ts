import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceEmployeeService {
   

  baseUrl = 'http://localhost:8082/employee';
  constructor(private httpClient: HttpClient) {}
  
  addempl( employee : any ) {
    return this.httpClient.post(this.baseUrl ,employee );
  
}
  getEmployee(){
    return this.httpClient.get(this.baseUrl+'/list');
  }
  deleteemp(id : Number){
    
    return this.httpClient.delete('http://localhost:8082/employee/'+id);
  
  
  }

}
