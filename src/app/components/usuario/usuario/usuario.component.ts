import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  constructor(
    private clienteService: ClienteService,
    private generalService: GeneralService,
  ) { }
  public clientes: any = [];
  public alergias: any;
  public limitaciones: any;
  public idCliente:any;
  n:any;
  y:any;
  m:any;
  d:any;
  fecha:any;
  public data : any = [];
  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem("logindata"));
    this.n =  new Date();
    //Año
    this.y = this.n.getFullYear();
    //Mes
    this.m = this.n.getMonth() + 1;
    //Día
    this.d = this.n.getDate();
    this.fecha = this.d + "/" + this.m + "/" + this.y;
    this.listar();
  }
  listar() {
    this.clienteService.listar().subscribe(
      response => {
        this.clientes = response['data'];
        console.log(this.clientes);
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  modalAlergias(msg) {
    this.alergias = msg;
  }
  modalLimitaciones(msg) {
    this.limitaciones = msg;
  }
  leftClick(id) {
    this.idCliente = id;
  }



}
