import { Component, OnInit } from '@angular/core';
import { EpsService } from 'src/app/services/eps.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-eps',
  templateUrl: './eps.component.html',
  styleUrls: ['./eps.component.scss']
})
export class EpsComponent implements OnInit {

  constructor(
    private epsService: EpsService,
    private generalService:GeneralService
  ) { }
  public eps:any=[];
  public p =0;

  ngOnInit() {
    this.listar();

  }

  listar(){
    this.epsService.listar().subscribe(
      res =>{
        this.eps=res;
        console.log(this.eps);

      }, err=>{
        console.log(<any>err);
      }
    )
  }

  eliminar(id){
    this.generalService.abrirConfirmacion().subscribe(
      res =>{
        this.epsService.eliminar(id).subscribe(
          res=>{
            this.generalService.abrirMensaje("Se ha eliminado correctamente","success");
            this.listar();
          },
          err=>{
            console.log(err);
          }
        );
      },err =>{
        this.generalService.abrirMensaje("Verificar información", "error");
            console.log(<any>err);
      }
    )
    

  }

}
