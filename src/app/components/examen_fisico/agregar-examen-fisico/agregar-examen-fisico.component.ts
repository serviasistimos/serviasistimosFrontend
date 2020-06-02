import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Router, ActivatedRoute } from '@angular/router';
import { ExamenFisicoService } from 'src/app/services/examenfisico.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-agregar-examen-fisico',
  templateUrl: './agregar-examen-fisico.component.html',
  styleUrls: ['./agregar-examen-fisico.component.scss']
})
export class AgregarExamenFisicoComponent implements OnInit {

  public data: FormGroup;
  public idHistoria: any;
  fecha: any;
  constructor(
    private formBuilder: FormBuilder,
    private generalService: GeneralService,
    private router: Router,
    private route: ActivatedRoute,
    private examenFisicoService: ExamenFisicoService
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => this.idHistoria = params['id']);
    console.log(this.idHistoria);
    let n = new Date();
    let y = n.getFullYear();
    let m = n.getMonth() + 1;
    let d = n.getDate();
    this.fecha = d + "/" + m + "/" + y;

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

  agregar() {

    /* OPERACION IMC */
    const pesoo = this.data.value.peso;
    const alturaa = this.data.value.talla;
    const resultado = alturaa * alturaa % pesoo;

    /* PORCENTAJE GRASA */
    const por_grasa = this.data.value.por_grasa;
    const grasa = pesoo * por_grasa;

    /*peso Muscular */
    const peso_muscular = this.data.value.por_musculo * pesoo;

    /*Operacion IMME*/
    const im = peso_muscular / alturaa;
    const imme = im / alturaa;


    /* operacion media */
    const sistolica = this.data.value.sistolica;
    const diastolica = this.data.value.diastolica;
    const diato = diastolica * diastolica;
    const media = sistolica + diato / 3;


    let data = {
      'talla': this.data.value.talla,
      'peso': this.data.value.peso,
      'imc': resultado,
      'por_grasa': this.data.value.por_grasa,
      'grasa': grasa,
      'por_musculo': this.data.value.por_musculo,
      'peso_muscular': peso_muscular,
      'imme': imme,
      'grasa_visceral': this.data.value.grasa_visceral,
      'fecha_consulta': this.fecha,
      'presion_arterial': this.data.value.presion_arterial,
      'sistolica': this.data.value.sistolica,
      'frecuencia_cardiaca': this.data.value.frecuencia_cardiaca,
      'frecuencia_respiratoria': this.data.value.frecuencia_respiratoria,
      'temperatura': this.data.value.temperatura,
      'sato2': this.data.value.sato2,
      'hidratacion': this.data.value.hidratacion,
      'diastolica': this.data.value.diastolica,
      'fio2': this.data.value.fio2,
      'media': media,
      'soplo_carotideo': this.data.value.soplo_carotideo,
      'ingurgitacion_yugular': this.data.value.ingurgitacion_yugular,
      'grado': this.data.value.grado,
      'genitourinario':this.data.value.genitourinario,
      'ruidos_cardiacos': this.data.value.ruidos_cardiacos,
      'soplos': this.data.value.soplos,
      'pulmonar': this.data.value.pulmonar,
      'aortico': this.data.value.aortico,
      'mitral': this.data.value.mitral,
      'tricuspideo': this.data.value.tricuspideo,
      'soplo_abdominal': this.data.value.soplo_abdominal,
      'murmullo_vesicular': this.data.value.murmullo_vesicular,
      'sibilancias': this.data.value.sibilancias,
      'roncus': this.data.value.roncus,
      'estertores': this.data.value.estertores,
      'descripcion_pulmonar': this.data.value.descripcion_pulmonar,
      'descripcion_abdomen':this.data.value.descripcion_abdomen,
      'dolor': this.data.value.dolor,
      'descripcion_dolor': this.data.value.descripcion_dolor,
      'percusion_izquierda': this.data.value.percusion_izquierda,
      'percusion_derecha': this.data.value.percusion_derecha,
      'hernia_umbilical': this.data.value.hernia_umbilical,
      'hernia_inguinal': this.data.value.hernia_inguinal,
      'descripcion_hernia_inguinal': this.data.value.descripcion_hernia_inguinal,
      'masas': this.data.value.masas,
      'descripcion_masas': this.data.value.descripcion_masas,
      'extremidades': this.data.value.extremidades,
      'ex_edema_izquierda': this.data.value.ex_edema_izquierda,
      'ex_edema_derecha': this.data.value.ex_edema_derecha,
      'gra_ex_edema_derecha': this.data.value.gra_ex_edema_derecha,
      'gra_ex_edema_izquierda': this.data.value.gra_ex_edema_izquierda,
      'braquial': this.data.value.braquial,
      'radial': this.data.value.radial,
      'femoral': this.data.value.femoral,
      'poplitea': this.data.value.poplitea,
      'pedia': this.data.value.pedia,
      'braquial_izq': this.data.value.braquial_izq,
      'radial_izq': this.data.value.radial_izq,
      'femoral_izq': this.data.value.femoral_izq,
      'poplitea_izq': this.data.value.poplitea_izq,
      'pedia_izq': this.data.value.pedia_izq,
      'cervical': this.data.value.cervical,
      'cervical_flexion': this.data.value.cervical_flexion,
      'cervical_extension': this.data.value.cervical_extension,
      'cervical_inclinacion_derecha': this.data.value.cervical_inclinacion_derecha,
      'cervical_inclinacion_izquierda': this.data.value.cervical_inclinacion_izquierda,
      'cervical_rotacion_derecha': this.data.value.cervical_rotacion_derecha,
      'cervical_rotacion_izquierda': this.data.value.cervical_rotacion_izquierda,
      'dorsolumbar': this.data.value.dorsolumbar,
      'dorsolumbar_flexion': this.data.value.dorsolumbar_flexion,
      'dorsolumbar_extension': this.data.value.dorsolumbar_extension,
      'dorsolumbar_inclinacion_derecha': this.data.value.dorsolumbar_inclinacion_derecha,
      'dorsolumbar_inclinacion_izquierda': this.data.value.dorsolumbar_inclinacion_izquierda,
      'dorsolumbar_rotacion_derecha': this.data.value.dorsolumbar_rotacion_derecha,
      'dorsolumbar_rotacion_izquierda': this.data.value.dorsolumbar_rotacion_izquierda,
      'hombro_der': this.data.value.hombro_der,
      'hombro_der_flexion': this.data.value.hombro_der_flexion,
      'hombro_der_extension': this.data.value.hombro_der_extension,
      'hombro_der_inclinacion_derecha': this.data.value.hombro_der_inclinacion_derecha,
      'hombro_der_inclinacion_izquierda': this.data.value.hombro_der_inclinacion_izquierda,
      'hombro_der_rotacion_derecha': this.data.value.hombro_der_rotacion_derecha,
      'hombro_der_rotacion_izquierda': this.data.value.hombro_der_rotacion_izquierda,
      'hombro_izq': this.data.value.hombro_izq,
      'hombro_izq_flexion': this.data.value.hombro_izq_flexion,
      'hombro_izq_extension': this.data.value.hombro_izq_extension,
      'hombro_izq_inclinacion_derecha': this.data.value.hombro_izq_inclinacion_derecha,
      'hombro_izq_inclinacion_izquierda': this.data.value.hombro_izq_inclinacion_izquierda,
      'hombro_izq_rotacion_derecha': this.data.value.hombro_izq_rotacion_derecha,
      'hombro_izq_rotacion_izquierda': this.data.value.hombro_izq_rotacion_izquierda,
      'codo_der': this.data.value.codo_der,
      'codo_der_flexion': this.data.value.codo_der_flexion,
      'codo_der_extension': this.data.value.codo_der_extension,
      'codo_der_inclinacion_derecha': this.data.value.codo_der_inclinacion_derecha,
      'codo_der_inclinacion_izquierda': this.data.value.codo_der_inclinacion_izquierda,
      'codo_der_rotacion_derecha': this.data.value.codo_der_rotacion_derecha,
      'codo_der_rotacion_izquierda': this.data.value.codo_der_rotacion_izquierda,
      'codo_izq': this.data.value.codo_izq,
      'codo_izq_flexion': this.data.value.codo_izq_flexion,
      'codo_izq_extension': this.data.value.codo_izq_extension,
      'codo_izq_inclinacion_derecha': this.data.value.codo_izq_inclinacion_derecha,
      'codo_izq_inclinacion_izquierda': this.data.value.codo_izq_inclinacion_izquierda,
      'codo_izq_rotacion_derecha': this.data.value.codo_izq_rotacion_derecha,
      'codo_izq_rotacion_izquierda': this.data.value.codo_izq_rotacion_izquierda,
      'muneca_der': this.data.value.muneca_der,
      'muneca_der_flexion': this.data.value.muneca_der_flexion,
      'muneca_der_extension': this.data.value.muneca_der_extension,
      'desviacion_cubital_der': this.data.value.desviacion_cubital_der,
      'desviacion_radial_der': this.data.value.desviacion_cubital_der,
      'muneca_izq': this.data.value.muneca_izq,
      'muneca_izq_flexion': this.data.value.muneca_izq_flexion,
      'muneca_izq_extension': this.data.value.muneca_izq_extension,
      'desviacion_cubital_izq': this.data.value.desviacion_cubital_der,
      'desviacion_radial_izq': this.data.value.desviacion_cubital_der,
      'dedos_derecha':this.data.value.dedos_derecha,
      'dedos_izquierda': this.data.value.dedos_izquierda,
      'cadera_der': this.data.value.cadera_der,
      'cadera_der_flexion': this.data.value.cadera_der_flexion,
      'cadera_der_extension': this.data.value.cadera_der_extension,
      'cadera_der_inclinacion_derecha': this.data.value.cadera_der_inclinacion_derecha,
      'cadera_der_inclinacion_izquierda': this.data.value.cadera_der_inclinacion_izquierda,
      'cadera_der_rotacion_derecha': this.data.value.cadera_der_rotacion_derecha,
      'cadera_der_rotacion_izquierda': this.data.value.cadera_der_rotacion_izquierda,
      'cadera_izq': this.data.value.cadera_izq,
      'cadera_izq_flexion': this.data.value.cadera_izq_flexion,
      'cadera_izq_extension': this.data.value.cadera_izq_extension,
      'cadera_izq_inclinacion_derecha': this.data.value.cadera_izq_inclinacion_derecha,
      'cadera_izq_inclinacion_izquierda': this.data.value.cadera_izq_inclinacion_izquierda,
      'cadera_izq_rotacion_derecha': this.data.value.cadera_izq_rotacion_derecha,
      'cadera_izq_rotacion_izquierda': this.data.value.cadera_izq_rotacion_izquierda,
      'rodilla_der': this.data.value.rodilla_der,
      'rodilla_grado_der': this.data.value.rodilla_grado_der,
      'rodilla_flexion_der': this.data.value.rodilla_flexion_der,
      'rodilla_extension_der': this.data.value.rodilla_extension_der,
      'rodilla_izq': this.data.value.rodilla_izq,
      'rodilla_grado_izq': this.data.value.rodilla_grado_izq,
      'rodilla_flexion_izq': this.data.value.rodilla_flexion_izq,
      'rodilla_extension_izq': this.data.value.rodilla_extension_izq,

      'tobillo_der': this.data.value.tobillo_der,
      'tobillo_grado_der': this.data.value.tobillo_grado_der,
      'tobillo_flexion_der': this.data.value.tobillo_flexion_der,
      'tobillo_extension_der': this.data.value.tobillo_extension_der,
      'inversion_der': this.data.value.inversion_der,
      'eversion_der': this.data.value.eversion_der,
      'tobillo_izq': this.data.value.tobillo_izq,
      'tobillo_grado_izq': this.data.value.tobillo_grado_izq,
      'tobillo_flexion_izq': this.data.value.tobillo_flexion_izq,
      'tobillo_extension_izq': this.data.value.tobillo_extension_izq,
      'inversion_izq': this.data.value.inversion_izq,
      'eversion_izq': this.data.value.eversion_izq,
      'dedos_pie_der': this.data.value.dedos_pie_der,
      'dedos_pie_izq': this.data.value.dedos_pie_izq,
      'anormales': this.data.value.anormales,
      'historia': this.idHistoria,
    };
    console.log(data);
    this.examenFisicoService.agregar(data).subscribe(
      res => {
        console.log(res);
        this.generalService.abrirMensaje(
          "Se ha creado correctamente",
          "success"
        );
        this.router.navigate(["/historia/ver/" + this.idHistoria]);
      }, err => {
        console.log(<any>err)
      }
    )
  }

}
