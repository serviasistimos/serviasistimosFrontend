import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-usuariosinactivos',
  templateUrl: './usuariosinactivos.component.html',
  styleUrls: ['./usuariosinactivos.component.scss']
})
export class UsuariosinactivosComponent implements OnInit {

  constructor(
    private clienteService: ClienteService
  ) { }
  public clientes: any = [];

  ngOnInit() {
    this.listar();
  }
  listar() {
    this.clienteService.listarinActivos().subscribe(
      response => {
        this.clientes = response['datos'];
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}
