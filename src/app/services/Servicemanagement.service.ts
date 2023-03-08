import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { Management } from '../management'
 
@Injectable({
  providedIn: 'root'
})


export class ServicemanagementService {
  baseUrl = 'http://localhost:8082/dir';
constructor(private httpClient: HttpClient) {}

addManagement( management : any ) {
  return this.httpClient.put(this.baseUrl ,management );

}  
getDirections() {
  const url = 'http://localhost:8082/dir/directions';
  return this.httpClient.get(url);
}
deletedir(id : Number){
  
  return this.httpClient.delete('http://localhost:8082/dir/'+id);


}

updatedir(id:Number , direction : Management): Observable<Management>{
  const url='http://localhost:8082/dir/directions/'

  return this.httpClient.put<Management>(url+id, direction);

}

getDirectionById(id: number){
  const url='http://localhost:8082/dir'
  return this.httpClient.get( `${url}/${id}`);
}



}
