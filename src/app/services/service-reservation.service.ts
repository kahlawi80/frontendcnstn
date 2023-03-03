import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceReservationService {

  
  baseUrl = 'http://localhost:8082/reserv';
  constructor(private httpClient: HttpClient) {}
  
  addreservation( reservation : any ) {
    return this.httpClient.post(this.baseUrl ,reservation );
  
}
  getreservation(){
    return this.httpClient.get(this.baseUrl+'/list');
  }
  deletereservation(id : Number){
    
    return this.httpClient.delete('http://localhost:8082/reserv/'+id);
  
  
  }
  
}
