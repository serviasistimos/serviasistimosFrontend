import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EpsService } from 'src/app/services/eps.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-editareps',
  templateUrl: './editareps.component.html',
  styleUrls: ['./editareps.component.scss']
})
export class EditarepsComponent implements OnInit {

  constructor(
    private generalService: GeneralService,
    private epsService: EpsService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  public data: FormGroup;
  public idEsp:any;
  public eps:any=[];


  ngOnInit() {
    this.route.params.subscribe(params => this.idEsp = params['id']);
    this.data = this.formBuilder.group({
      eps: ['', Validators.required],
    });
    this.consultar();
  }

  consultar(){
    this.epsService.consultar(this.idEsp).subscribe(
      res=>{
        this.eps=res;
        console.log(this.eps);
      },err=>{
        console.log(<any>err);
      }
    )
  }

  editar(){

    let data ={
      "id":this.idEsp,
      "descripcion":this.data.value.eps
    }
    this.epsService.editar(data).subscribe(
      res=>{
          this.generalService.abrirMensaje("Se ha editado correctamente", "success");
          this.router.navigate(['/eps']);
      },err=>{
        console.log(<any>err);
      }
    )
  }

}
