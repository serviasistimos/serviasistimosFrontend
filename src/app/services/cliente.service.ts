import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private http : HttpClient
  ) { }

  url : any = GeneralService.WS_URL + "cliente/";

  listar(): any {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
  	return this.http.get(this.url + 'listar', {headers : headers}); 
  }

  consultar(id): any {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
  	return this.http.get(this.url + 'consultar/' + id, {headers : headers}); 
  }


  agregar(data)
  {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    let params = data;
  	return this.http.post(this.url + 'insertar', params, {headers: headers});
  }
  
  editar(data): any
  {
    let params =(data);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put(this.url + 'actualizar', params, {headers: headers});
  }
    
  eliminar(id)
  {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.delete(this.url + 'eliminar/' + id, {headers : headers});
  }
  pago(id)
  {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.delete(this.url + 'pago/' + id, {headers : headers});
  }
  listarinActivos()
  {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get(this.url + 'listarinactivos' , {headers : headers});
  }

}
