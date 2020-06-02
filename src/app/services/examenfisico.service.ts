import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class ExamenFisicoService {

  constructor(
    private http : HttpClient
  ) { }

  url : any = GeneralService.WS_URL + "examen/fisico/";


  agregar(data)
  {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    let params = data;
  	return this.http.post(this.url + 'insertar', params, {headers: headers});
  }
  
  consultar(id): any {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
  	return this.http.get(this.url + 'consultar/' + id, {headers : headers}); 
  }


}
