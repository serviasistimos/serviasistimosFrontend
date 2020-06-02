import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticoService {
  
 public  url : any = GeneralService.WS_URL + "diagnostico/";

  constructor(
    private http : HttpClient
  ) { }

  

  listar() : any
  {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
  	return this.http.get(this.url + 'listar', {headers : headers}); 
  }

  
  editar(form) : any
  {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const data = form;
  	return this.http.put(this.url + 'actualizar', data, {headers : headers}); 
  }

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
