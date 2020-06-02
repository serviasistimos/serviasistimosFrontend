import { Component, OnInit } from '@angular/core';
import { CuentaService } from 'src/app/services/cuenta.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.scss']
})
export class CuentaComponent implements OnInit {

  constructor(
    private CuentaService : CuentaService,
    private generalService:GeneralService
  ) { }

  public cuentas : any = [];
  public term:any;
  public p =0;

  ngOnInit()
  {
    this.listar();
  }

  listar()
  {
    this.CuentaService.listar().subscribe(
      response => {
        this.cuentas = response['data'];
        console.log(this.cuentas);
      },
      error => {
        console.log(<any>error);
      }
    );

  }
  eliminar(id)
  {
    this.generalService.abrirConfirmacion().subscribe(
  		response => {
        this.CuentaService.eliminar(id).subscribe(
          response => {
            this.generalService.abrirMensaje("Eliminado correctamente", "success");
            this.listar();
          },
          error => {
            console.log(<any>error);
          }
        );
  		},
  		error => {
  			console.log(<any>error);
  		}
    );
  }

}