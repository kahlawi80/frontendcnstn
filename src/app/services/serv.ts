import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceservService {

  constructor(private httpClient: HttpClient) { }
  baseUrl = 'http://localhost:8082/services';

addservice( Serv : any ) {
  //Serv.direction_id = Number(Serv.direction_id);
  return this.httpClient.post(this.baseUrl ,Serv );

}  

getServices() {
  const url = 'http://localhost:8082/services/list';
  return this.httpClient.get(url);
}
}