import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  constructor(
    private http : HttpClient
  ) { }

  public url : any = GeneralService.WS_URL + "cuenta/";

  listar() : any
  {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
  	return this.http.get(this.url + 'listar', {headers : headers}); 
  }
  
  consultar(id) : any
  {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
  	return this.http.get(this.url + 'consultar/' + id, {headers : headers}); 
  }

  agregar(form) : any
  {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const data = form;
  	return this.http.post(this.url + 'insertar', data, {headers : headers}); 
  }

  editar(form) : any
  {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const data = form;
  	return this.http.put(this.url + 'actualizar', data, {headers : headers}); 
  }

  eliminar(id) : any
  {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
  	return this.http.delete(this.url + 'eliminar/' + id, {headers : headers}); 
  }

  editarclave(form) : any
  {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const data = form;
  	return this.http.put(this.url + 'actualizarclave', data, {headers : headers}); 
  }

}