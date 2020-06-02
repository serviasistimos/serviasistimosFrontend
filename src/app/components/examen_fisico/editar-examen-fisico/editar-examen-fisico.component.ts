import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/services/general.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ExamenFisicoService } from 'src/app/services/examenfisico.service';

@Component({
  selector: 'app-editar-examen-fisico',
  templateUrl: './editar-examen-fisico.component.html',
  styleUrls: ['./editar-examen-fisico.component.scss']
})
export class EditarExamenFisicoComponent implements OnInit {

  public data: FormGroup;
  public examen : any=[];
  public idExamen:any;
  fecha: any;
  constructor(
    private formBuilder: FormBuilder,
    private generalService: GeneralService,
    private router: Router,
    private route: ActivatedRoute,
    private examenFisicoService: ExamenFisicoService
  ) { }

  ngOnInit() {
    
    this.route.params.subscribe(params => this.idExamen = params['id']);
    console.log(this.idExamen);
    this.consultar();
    this.data = this.formBuilder.group({
      talla: ['', Validators.required],
      peso: ['', Validators.required],
      por_grasa: ['', Validators.required],
      por_musculo: ['', Validators.required],
      grasa_visceral: ['', Validators.required],

      
      
      sistolica: ['', Validators.required],
      frecuencia_cardiaca: ['', Validators.required],
      frecuencia_respiratoria: ['', Validators.required],
      temperatura: ['', Validators.required],
      sato2: ['', Validators.required],
      hidratacion: ['', Validators.required],
      diastolica: ['', Validators.required],
      fio2: ['', Validators.required],


      soplo_carotideo: ['', Validators.required],
      ingurgitacion_yugular: ['', Validators.required],
      grado: [''],

      descripcion_torax: ['', Validators.required],
      ruidos_cardiacos: ['', Validators.required],
      soplos: ['', Validators.required],
      pulmonar: [''],
      aortico: [''],
      mitral: [''],
      tricuspideo: [''],
      soplo_abdominal: ['', Validators.required],
      murmullo_vesicular: [''],
      sibilancias: [''],
      roncus: [''],
      estertores: [''],
      descripcion_pulmonar: ['', Validators.required],

      descripcion_abdomen: ['', Validators.required],
      dolor: ['', Validators.required],
      descripcion_dolor: [''],

      percusion_izquierda: ['', Validators.required],
      percusion_derecha: ['', Validators.required],
      hernia_umbilical: ['', Validators.required],
      hernia_inguinal: ['', Validators.required],
      descripcion_hernia_inguinal: [''],
      masas: ['', Validators.required],
      descripcion_masas: [''],
      genitourinario: ['', Validators.required],
      extremidades: ['', Validators.required],
      ex_edema_izquierda: ['', Validators.required],
      gra_ex_edema_izquierda: [''],
      braquial_izq: ['', Validators.required],
      radial_izq: ['', Validators.required],
      femoral_izq: ['', Validators.required],
      poplitea_izq: ['', Validators.required],
      pedia_izq: ['', Validators.required],
      ex_edema_derecha: ['', Validators.required],
      gra_ex_edema_derecha: [''],
      braquial: ['', Validators.required],
      radial: ['', Validators.required],
      femoral: ['', Validators.required],
      poplitea: ['', Validators.required],
      pedia: ['', Validators.required],
     
      cervical: ['', Validators.required],
      cervical_flexion: ['', Validators.required],
      cervical_extension: ['', Validators.required],
      cervical_inclinacion_derecha: ['', Validators.required],
      cervical_inclinacion_izquierda: ['', Validators.required],
      cervical_rotacion_derecha: ['', Validators.required],
      cervical_rotacion_izquierda: ['', Validators.required],

      dorsolumbar: ['', Validators.required],
      dorsolumbar_flexion: ['', Validators.required],
      dorsolumbar_extension: ['', Validators.required],
      dorsolumbar_inclinacion_derecha: ['', Validators.required],
      dorsolumbar_inclinacion_izquierda: ['', Validators.required],
      dorsolumbar_rotacion_derecha: ['', Validators.required],
      dorsolumbar_rotacion_izquierda: ['', Validators.required],

      hombro_der: ['', Validators.required],
      hombro_der_flexion: ['', Validators.required],
      hombro_der_extension: ['', Validators.required],
      hombro_der_inclinacion_derecha: ['', Validators.required],
      hombro_der_inclinacion_izquierda: ['', Validators.required],
      hombro_der_rotacion_derecha: ['', Validators.required],
      hombro_der_rotacion_izquierda: ['', Validators.required],

      hombro_izq: ['', Validators.required],
      hombro_izq_flexion: ['', Validators.required],
      hombro_izq_extension: ['', Validators.required],
      hombro_izq_inclinacion_derecha: ['', Validators.required],
      hombro_izq_inclinacion_izquierda: ['', Validators.required],
      hombro_izq_rotacion_derecha: ['', Validators.required],
      hombro_izq_rotacion_izquierda: ['', Validators.required],

      codo_der: ['', Validators.required],
      codo_der_flexion: ['', Validators.required],
      codo_der_extension: ['', Validators.required],
      codo_der_inclinacion_derecha: ['', Validators.required],
      codo_der_inclinacion_izquierda: ['', Validators.required],
      codo_der_rotacion_derecha: ['', Validators.required],
      codo_der_rotacion_izquierda: ['', Validators.required],

      codo_izq: ['', Validators.required],
      codo_izq_flexion: ['', Validators.required],
      codo_izq_extension: ['', Validators.required],
      codo_izq_inclinacion_derecha: ['', Validators.required],
      codo_izq_inclinacion_izquierda: ['', Validators.required],
      codo_izq_rotacion_derecha: ['', Validators.required],
      codo_izq_rotacion_izquierda: ['', Validators.required],


      muneca_der: ['', Validators.required],
      muneca_der_flexion: ['', Validators.required],
      muneca_der_extension: ['', Validators.required],
      desviacion_cubital_der: ['', Validators.required],
      desviacion_radial_der: ['', Validators.required],



      muneca_izq: ['', Validators.required],
      muneca_izq_flexion: ['', Validators.required],
      muneca_izq_extension: ['', Validators.required],
      desviacion_cubital_izq: ['', Validators.required],
      desviacion_radial_izq: ['', Validators.required],


      dedos_derecha: ['', Validators.required],
      dedos_izquierda:  ['', Validators.required],
      

      cadera_der: ['', Validators.required],
      cadera_der_flexion: ['', Validators.required],
      cadera_der_extension: ['', Validators.required],
      cadera_der_inclinacion_derecha: ['', Validators.required],
      cadera_der_inclinacion_izquierda: ['', Validators.required],
      cadera_der_rotacion_derecha: ['', Validators.required],
      cadera_der_rotacion_izquierda: ['', Validators.required],

      cadera_izq: ['', Validators.required],
      cadera_izq_flexion: ['', Validators.required],
      cadera_izq_extension: ['', Validators.required],
      cadera_izq_inclinacion_derecha: ['', Validators.required],
      cadera_izq_inclinacion_izquierda: ['', Validators.required],
      cadera_izq_rotacion_derecha: ['', Validators.required],
      cadera_izq_rotacion_izquierda: ['', Validators.required],

      rodilla_der: ['', Validators.required],
      rodilla_grado_der: ['', Validators.required],
      rodilla_flexion_der: ['', Validators.required],
      rodilla_extension_der: ['', Validators.required],
      rodilla_izq: ['', Validators.required],
      rodilla_grado_izq: ['', Validators.required],
      rodilla_flexion_izq: ['', Validators.required],
      rodilla_extension_izq: ['', Validators.required],
      tobillo_der: ['', Validators.required],
      tobillo_grado_der: ['', Validators.required],
      tobillo_flexion_der: ['', Validators.required],
      tobillo_extension_der: ['', Validators.required],
      inversion_der: ['', Validators.required],
      eversion_der: ['', Validators.required],
      tobillo_izq: ['', Validators.required],
      tobillo_grado_izq: ['', Validators.required],
      tobillo_flexion_izq: ['', Validators.required],
      tobillo_extension_izq: ['', Validators.required],
      inversion_izq: ['', Validators.required],
      eversion_izq: ['', Validators.required],
      
      dedos_pie_der: ['', Validators.required],
      dedos_pie_izq: ['', Validators.required],
      anormales: ['', Validators.required],
    });
  }
agregar(){

}
consultar(){
  this.examenFisicoService.consultar(this.idExamen).subscribe(
    res => {
      this.examen = res['data'];
      console.log(this.examen);
    },
    err=>{
      console.log(<any>err);
    }
  )
}
}
