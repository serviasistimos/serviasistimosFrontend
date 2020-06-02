import { Component, OnInit } from '@angular/core';
import { AnalisisService } from 'src/app/services/analisis.service';
import { GeneralService } from 'src/app/services/general.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-analisis',
  templateUrl: './editar-analisis.component.html',
  styleUrls: ['./editar-analisis.component.scss']
})
export class EditarAnalisisComponent implements OnInit {

  public data: FormGroup;
  public idAnalisis:any;
  public analisis :any =[];
  constructor(
    private generalService: GeneralService,
    private analisisService: AnalisisService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => (this.idAnalisis = params['id']));
    
    this.data = this.formBuilder.group({
        descripcion_analisis : ['', Validators.required],
        clasificacion_AHA : ['', Validators.required],
        clasificacion_AACVPR : ['', Validators.required],
        objetivos : ['', Validators.required]
    });
    this.consultar();
  }

  consultar(){
    this.analisisService.consultar(this.idAnalisis).subscribe(
      res=>{
        this.analisis = res['data'];
        console.log(this.analisis);
      },err=>{
        console.log(<any>err);
      }
    )
  }

  volver(){
    this.location.back();
  }
}
