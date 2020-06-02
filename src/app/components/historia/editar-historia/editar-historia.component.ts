import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { HistoriaService } from 'src/app/services/historia.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-historia',
  templateUrl: './editar-historia.component.html',
  styleUrls: ['./editar-historia.component.scss']
})
export class EditarHistoriaComponent implements OnInit {

  constructor(
    private generalService: GeneralService,
    private historiaService: HistoriaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  public sexo: any = [];
  public idHistoria: any;
  public data: FormGroup;
  public historia: any = [];
  public idCliente: any;

  ngOnInit() {
    this.route.params.subscribe(params => this.idHistoria = params['id']);
    console.log(this.idHistoria);
    this.data = this.formBuilder.group({

      // motivo consulta 
      razon: ['', Validators.required],
      enfermedad_actual: ['', Validators.required],
      sincope: ['', Validators.required],
      cefalea: ['', Validators.required],
      dolor_toracico: ['', Validators.required],
      palpitaciones: ['', Validators.required],
      dolor_articular: ['', Validators.required],

      // Antecedentes patologicos
      patologicos: ['', Validators.required],
      otros: ['', Validators.required],
      Obesidad: ['', Validators.required],
      Dislipidemia: ['', Validators.required],
      hipertencion_arterial: ['', Validators.required],
      diabetes_mellitus: ['', Validators.required],
      Sincope: ['', Validators.required],
      Infarto_agudo_del_miocardio: ['', Validators.required],
      insuficiencia_cardiaca: ['', Validators.required],
      paro_cardiaco: ['', Validators.required],
      enfermedad_renal: ['', Validators.required],
      estadio: ['', Validators.required],
      hemodialisis: ['', Validators.required],
      Enfermedad_vascular_periferica: ['', Validators.required],
      Asma: ['', Validators.required],
      EPOC: ['', Validators.required],
      Artritis: ['', Validators.required],
      Artritis_reumatoidea: ['', Validators.required],
      LES: ['', Validators.required],
      Anemia: ['', Validators.required],
      hepatitis: ['', Validators.required],
      VIH: ['', Validators.required],
      Neoplasias: ['', Validators.required],
      Hipotiroidismo: ['', Validators.required],

      // Quirúrgicos
      corazon: ['', Validators.required],
      hombro: ['', Validators.required],
      rodilla: ['', Validators.required],
      quirurgicos: ['', Validators.required],

      // Alergicos
      alergicos: ['', Validators.required],
      descripcion_alergicos: ['', Validators.required],

      // Toxicologicos
      alcohol: ['', Validators.required],
      tabaquismo: ['', Validators.required],
      sustancias_psicoactivas: ['', Validators.required],
      toxilogicos: ['', Validators.required],

      // Traumaticos
      fracturas: ['', Validators.required],
      transfusionales: ['', Validators.required],
      traumaticos: ['', Validators.required],

      // Hospitalizaciones
      hospitalizaciones: ['', Validators.required],
      descripcion_hospitalizaciones: ['', Validators.required],

      // Ginecologicos
      Menarquia: ['', Validators.required],
      FUR: ['', Validators.required],
      Ciclos: ['', Validators.required],
      embarazo: ['', Validators.required],
      mu_g: [""],
      mu_p: [""],
      mu_c: [""],
      mu_a: [""],
      mu_v: [""],
      mu_m: [""],
      mu_e: [""],
      //validacion
      sexo: ['', Validators.required],
      //familiares
      muerte_subita: ['', Validators.required],
      IAM: ['', Validators.required],
      diabetes_mellitus_familia: ['', Validators.required],
      descripcion_antecednetes_familiares: ['', Validators.required],
    });
    this.consultar();
  }
  consultar(){
    this.historiaService.consultar(this.idHistoria).subscribe(
      response=>{
        this.historia=response['data'];
        console.log(this.historia);
        this.sexo=response['data'].cliente.genero;
        console.log(this.sexo);
      },
      error=>{
        console.log(<any>error);
      }
    )
  }


  editar() {
    this.location.back();
  }
}
