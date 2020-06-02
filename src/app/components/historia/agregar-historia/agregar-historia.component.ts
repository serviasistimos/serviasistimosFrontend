import { Component, OnInit } from "@angular/core";
import { GeneralService } from "src/app/services/general.service";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { HistoriaService } from "src/app/services/historia.service";
import { ClienteService } from "src/app/services/cliente.service";

@Component({
  selector: "app-agregar-historia",
  templateUrl: "./agregar-historia.component.html",
  styleUrls: ["./agregar-historia.component.scss"]
})
export class AgregarHistoriaComponent implements OnInit {
  public data: FormGroup;
  public idCliente: any;
  n: any;
  y: any;
  m: any;
  d: any;
  fecha: any;
  public sexo: any = [];

  constructor(
    private generalService: GeneralService,
    private historiaService: HistoriaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
    let n = new Date();
    let y = n.getFullYear();
    let m = n.getMonth() + 1;
    let d = n.getDate();
    this.fecha = d + "/" + m + "/" + y;
    this.route.params.subscribe(params => (this.idCliente = params["id"]));

    this.consultar();
    this.data = this.formBuilder.group({
      //motivo consulta
      razon: ["", Validators.required],
      enfermedad_actual: ["", Validators.required],
      sincope: ["", Validators.required],
      cefalea: ["", Validators.required],
      dolor_toracico: ["", Validators.required],
      palpitaciones: ["", Validators.required],
      dolor_articular: ["", Validators.required],

      //Antecedentes patologicos
      patologicos: ["", Validators.required],
      otros: [""],
      Obesidad: ["", Validators.required],
      Dislipidemia: ["", Validators.required],
      hipertencion_arterial: ["", Validators.required],
      diabetes_mellitus: ["", Validators.required],
      Sincope_familiar: ["", Validators.required],
      Infarto_agudo_del_miocardio: ["", Validators.required],
      insuficiencia_cardiaca: ["", Validators.required],
      paro_cardiaco: ["", Validators.required],
      enfermedad_renal: ["", Validators.required],
      estadio: ["", Validators.required],
      hemodialisis: ["", Validators.required],
      Enfermedad_vascular_periferica: ["", Validators.required],
      Asma: ["", Validators.required],
      EPOC: ["", Validators.required],
      Artritis: ["", Validators.required],
      Artritis_reumatoidea: ["", Validators.required],
      LES: ["", Validators.required],
      Anemia: ["", Validators.required],
      hepatitis: ["", Validators.required],
      VIH: ["", Validators.required],
      Neoplasias: ["", Validators.required],
      Hipotiroidismo: ["", Validators.required],

      //Quirúrgicos
      corazon: ["", Validators.required],
      hombro: ["", Validators.required],
      rodilla: ["", Validators.required],
      quirurgicos: ["", Validators.required],

      //Alergicos
      alergicos: ["", Validators.required],
      descripcion_alergicos: ["", Validators.required],

      //Toxicologicos
      alcohol: ["", Validators.required],
      tabaquismo: ["", Validators.required],
      sustancias_psicoactivas: ["", Validators.required],
      toxilogicos: ["", Validators.required],

      //Traumaticos
      fracturas: ["", Validators.required],
      transfusionales: ["", Validators.required],
      traumaticos: ["", Validators.required],

      //Hospitalizaciones
      hospitalizaciones: ["", Validators.required],
      descripcion_hospitalizaciones: ["", Validators.required],

      //Ginecologicos
      Menarquia: [""],
      FUR: [""],
      Ciclos: [""],
      embarazo: [""],
      mu_g: [""],
      mu_p: [""],
      mu_c: [""],
      mu_a: [""],
      mu_v: [""],
      mu_m: [""],
      mu_e: [""],

      //familiares
      muerte_subita: ["", Validators.required],
      IAM: ["", Validators.required],
      diabetes_mellitus_familia: ["", Validators.required],
      descripcion_antecednetes_familiares: ["", Validators.required]
    });
  }

  consultar() {
    this.clienteService.consultar(this.idCliente).subscribe(
      res => {
        this.sexo = res.data.genero;
        console.log(this.sexo);
      },
      err => {
        console.log(<any>err);
      }
    );
  }

  agregar() {
    let json = {
      //motivo consulta
      razon: this.data.value.razon,
      enfermedad_actual: this.data.value.enfermedad_actual,
      sincope: this.data.value.sincope,
      cefalea: this.data.value.cefalea,
      dolor_toracico: this.data.value.dolor_toracico,
      palpitaciones: this.data.value.palpitaciones,
      dolor_articular: this.data.value.dolor_articular,

      //Antecedentes patologicos
      patologicos: this.data.value.patologicos,
      otros: this.data.value.otros,
      Obesidad: this.data.value.Obesidad,
      Dislipidemia: this.data.value.Dislipidemia,
      hipertencion_arterial: this.data.value.hipertencion_arterial,
      diabetes_mellitus: this.data.value.diabetes_mellitus,
      Sincope_familiar: this.data.value.Sincope,
      Infarto_agudo_del_miocardio: this.data.value.Infarto_agudo_del_miocardio,
      insuficiencia_cardiaca: this.data.value.insuficiencia_cardiaca,
      paro_cardiaco: this.data.value.paro_cardiaco,
      enfermedad_renal: this.data.value.enfermedad_renal,
      estadio: this.data.value.estadio,
      hemodialisis: this.data.value.hemodialisis,
      Enfermedad_vascular_periferica: this.data.value
        .Enfermedad_vascular_periferica,
      Asma: this.data.value.Asma,
      EPOC: this.data.value.EPOC,
      Artritis: this.data.value.Artritis,
      Artritis_reumatoidea: this.data.value.Artritis_reumatoidea,
      LES: this.data.value.LES,
      Anemia: this.data.value.Anemia,
      hepatitis: this.data.value.hepatitis,
      VIH: this.data.value.VIH,
      Neoplasias: this.data.value.Neoplasias,
      Hipotiroidismo: this.data.value.Hipotiroidismo,

      //Quirúrgicos
      corazon: this.data.value.corazon,
      hombro: this.data.value.hombro,
      rodilla: this.data.value.rodilla,
      quirurgicos: this.data.value.quirurgicos,

      //Alergicos
      alergicos: this.data.value.alergicos,
      descripcion_alergicos: this.data.value.descripcion_alergicos,

      //Toxicologicos
      alcohol: this.data.value.alcohol,
      tabaquismo: this.data.value.tabaquismo,
      sustancias_psicoactivas: this.data.value.sustancias_psicoactivas,
      toxilogicos: this.data.value.toxilogicos,

      //Traumaticos
      fracturas: this.data.value.fracturas,
      transfusionales: this.data.value.transfusionales,
      traumaticos: this.data.value.traumaticos,

      //Hospitalizaciones
      hospitalizaciones: this.data.value.hospitalizaciones,
      descripcion_hospitalizaciones: this.data.value
        .descripcion_hospitalizaciones,

      //Ginecologicos
      Menarquia: this.data.value.Menarquia,
      FUR: this.data.value.FUR,
      Ciclos: this.data.value.Ciclos,
      embarazo: this.data.value.embarazo,
      mu_g: this.data.value.mu_g,
      mu_p: this.data.value.mu_p,
      mu_c: this.data.value.mu_c,
      mu_a: this.data.value.mu_a,
      mu_v: this.data.value.mu_v,
      mu_m: this.data.value.mu_m,
      mu_e: this.data.value.mu_e,

      //familiares
      muerte_subita: this.data.value.muerte_subita,
      IAM: this.data.value.IAM,
      diabetes_mellitus_familia: this.data.value.diabetes_mellitus_familia,
      descripcion_antecednetes_familiares: this.data.value
        .descripcion_antecednetes_familiares,
      fecha_consulta: this.fecha,
      cliente: this.idCliente
    };
    console.log(json);
    this.historiaService.agregar(json).subscribe(
      response => {
        console.log(response);
        this.generalService.abrirMensaje(
          "Se ha creado correctamente",
          "success"
        );
        this.router.navigate(["/usuario/ver/" + this.idCliente]);
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
