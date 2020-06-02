import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MedidasService } from 'src/app/services/medidas.service';
import * as JsPDF from 'jspdf';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-ver-usuario',
  templateUrl: './ver-usuario.component.html',
  styleUrls: ['./ver-usuario.component.scss']
})
export class VerUsuarioComponent implements OnInit {

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute,
    private medidasService: MedidasService,
  ) { }



  public alergias: any;
  public limitaciones: any;
  public idCliente: any;
  public idHistoria: any;
  public cliente: any = [];
  public diagnostico: any = [];
  public medidas: any = [];
  public enfermedad: any;
  public idMedida: any;
  public historia: any = [];
  public p1 = 0;
  public p2 = 0;
  public p3 = 0;



  ngOnInit() {
    this.route.params.subscribe(params => this.idCliente = params['id']);
    this.consultar();
  }


  consultar() {
    this.clienteService.consultar(this.idCliente).subscribe(
      response => {
        this.cliente = response['data'];
        console.log(this.cliente)
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
    this.idHistoria = id;
  }
  modalEnfermedad(msg) {
    this.enfermedad = msg
  }
  left(id) {
    this.idMedida = id;
  }


}
