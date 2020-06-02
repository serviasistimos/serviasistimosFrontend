import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class HistoriaService {

  constructor(
    private http : HttpClient
  ) { }

  url : any = GeneralService.WS_URL + "historia/";

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
    let params = data;
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put(this.url + 'editar/'+data.id,params,{headers : headers});
  } 
    
  eliminar(id)
  {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.delete(this.url + 'eliminar/' + id, {headers : headers});
  }

}
