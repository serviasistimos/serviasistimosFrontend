import { Component, OnInit } from '@angular/core';
import { EpsService } from 'src/app/services/eps.service';
import { GeneralService } from 'src/app/services/general.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregareps',
  templateUrl: './agregareps.component.html',
  styleUrls: ['./agregareps.component.scss']
})
export class AgregarepsComponent implements OnInit {

  constructor(
    private generalService: GeneralService,
    private epsService: EpsService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  public data: FormGroup;

  ngOnInit() {
    this.data = this.formBuilder.group({
      eps: ['', Validators.required],
    });
  }

  agregar(){
    let data ={
      "descripcion":this.data.value.eps
    }
    this.epsService.agregar(data).subscribe(
      res=>{
          this.generalService.abrirMensaje("Se ha agreado correctamente", "success");
          this.router.navigate(['/eps']);
      },err=>{
        console.log(<any>err);
      }
    )
  }

}
