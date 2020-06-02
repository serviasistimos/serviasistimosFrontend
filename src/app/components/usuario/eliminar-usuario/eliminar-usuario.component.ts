import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { GeneralService } from 'src/app/services/general.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eliminar-usuarios',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.scss']
})
export class EliminarUsuarioComponent implements OnInit {

  constructor(
    private clienteService: ClienteService,
    private generalService: GeneralService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  public idCliente:any;

  ngOnInit() {
    this.route.params.subscribe(params => this.idCliente = params['id']);
  }
  eliminar(){
    this.generalService.abrirConfirmacion().subscribe(
      response =>{
        this.clienteService.eliminar(this.idCliente).subscribe(
          response=>{
            console.log(response);
            this.generalService.abrirMensaje("Se ha eliminado correctamente","success");
            this.router.navigate(['/usuario']);
          },
          error=>{
            console.log(error);
          }
        );
      },error =>{
        this.generalService.abrirMensaje("Verificar información", "error");
            console.log(<any>error);

      }
    )
    

  }

}
