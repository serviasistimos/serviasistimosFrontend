import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoriaService } from 'src/app/services/historia.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-eliminar-historia',
  templateUrl: './eliminar-historia.component.html',
  styleUrls: ['./eliminar-historia.component.scss']
})
export class EliminarHistoriaComponent implements OnInit {

  constructor(
    private generalService: GeneralService,
    private historiaService: HistoriaService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  public idHistoria:any;

  ngOnInit() {
    this.route.params.subscribe(params => this.idHistoria = params['id']);
    console.log(this.idHistoria);
  }
  eliminar(){
    this.historiaService.eliminar(this.idHistoria).subscribe(
      response=>{
        console.log(response);
        this.generalService.abrirMensaje("Se ha eliminado correctamente","success");
        this.router.navigate(['/usuario']);
      },
      error=>{
        console.log(error);
      }
    )

  }

}
