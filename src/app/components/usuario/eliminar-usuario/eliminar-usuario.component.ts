import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eliminar-usuarios',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.scss']
})
export class EliminarUsuarioComponent implements OnInit {

  constructor(
    private generalService: GeneralService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  public idCliente: any;

  ngOnInit() {
    this.route.params.subscribe(params => this.idCliente = params['id']);
  }
  eliminar() {
    //   this.generalService.abrirConfirmacion().subscribe(
    //     response => {
    //       this.clienteService.eliminar(this.idCliente).subscribe(
    //         res => {
    //           console.log(response);
    //           this.generalService.abrirMensaje("Se ha eliminado correctamente", "success");
    //           this.router.navigate(['/usuario']);
    //         },
    //         error => {
    //           console.log(error);
    //         }
    //       );
    //     }, err => {
    //       this.generalService.abrirMensaje("Verificar información", "error");
    //       console.log(<any>err);
    //     });
    // }
  }

}
