import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  constructor(
    private http : HttpClient
  ) { }

 public  url : any = GeneralService.WS_URL + "genero/";


  listar(): any {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
  	return this.http.get(this.url+ 'listar',{headers : headers}); 
  }


}
