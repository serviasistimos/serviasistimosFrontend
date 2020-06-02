import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlimentacionService } from 'src/app/services/alimentacion.service';


@Component({
  selector: 'app-agregar-analisis',
  templateUrl: './agregar-analisis.component.html',
  styleUrls: ['./agregar-analisis.component.scss']
})
export class AgregarAnalisisComponent implements OnInit {

  public data: FormGroup;
  public idHistoria: any;
  public fecha: any;

  constructor(
    private generalService: GeneralService,
    private alimentacionService: AlimentacionService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => (this.idHistoria = params['id']));
    let n = new Date();
    let y = n.getFullYear();
    let m = n.getMonth() + 1;
    let d = n.getDate();
    this.fecha = d + "/" + m + "/" + y;
    this.data = this.formBuilder.group({
        descripcion_analisis : ['', Validators.required],
        clasificacion_AHA : ['', Validators.required],
        clasificacion_AACVPR : ['', Validators.required],
        objetivos : ['', Validators.required]
    });
  }

  agregar(){
    let data ={
      'descripcion_analisis' :this.data.value.descripcion_analisis,
        'clasificacion_AHA' :this.data.value.clasificacion_AHA,
        'clasificacion_AACVPR' :this.data.value.clasificacion_AACVPR,
        'objetivos' :this.data.value.objetivos,
        'fecha_consulta' :this.fecha,
        'historia' :this.idHistoria,
    }
    this.alimentacionService.agregar(data).subscribe(
      res=>{
        this.generalService.abrirMensaje(
          "Se ha creado correctamente",
          "success"
        );
        this.router.navigate(["/historia/ver/" + this.idHistoria]);
      },err=>{
        console.log(err);
      }
    )
  }

}
