import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesalleService {

  baseUrl = 'http://localhost:8082/salles';
  constructor(private httpClient: HttpClient) {}
  
  addsalle( salle : any ) {
    return this.httpClient.post(this.baseUrl , salle);
  
}
  getsalle(){
    return this.httpClient.get(this.baseUrl+'/list');
  }
  deletesalle(id : Number){
    
    return this.httpClient.delete('http://localhost:8082/salles/'+id);
  
  
  }

}
