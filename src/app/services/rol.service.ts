import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(
    private http : HttpClient
  ) { }

  url : any = GeneralService.WS_URL + "rol/";

  listar(): any {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
  	return this.http.get(this.url + 'listar', {headers : headers}); 
  }

}
