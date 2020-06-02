import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { EpsService } from 'src/app/services/eps.service';
import { GeneroService } from 'src/app/services/genero.service';

@Component({
  selector: 'app-agregar-usuarios',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.scss']
})
export class AgregarUsuarioComponent implements OnInit {

  constructor(
    private generalService: GeneralService,
    private clienteService: ClienteService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private epsService: EpsService,
    private generoService: GeneroService
  ) { }

  public data: FormGroup;
  public eps: any = [];
  public genero: any = [];
  public descripcionLIM: any;
  public descripcionALE: any;

  ngOnInit() {
    this.data = this.formBuilder.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      telefono: ['', Validators.required],
      celular: ['', Validators.required],
      correo: ['', Validators.required],
      eps: ['', Validators.required],
      nombre_emergencia: ['', Validators.required],
      celular_emergencia: ['', Validators.required],
      alergias: ['', Validators.required],
      descripcion_alergias: [],
      limitaciones: ['', Validators.required],
      descripcion_limitaciones: [],
      tipo_documento: ['', Validators.required],
      genero: ['', Validators.required],
      pago: ['', Validators.required],
      fecha_entrada: ['', Validators.required],
      fecha_fin: ['', Validators.required],
    });
    this.listarEps();
    this.listarGenero();
  }


  listarEps() {
    this.epsService.listar().subscribe(
      res => {
        this.eps = res;
      }, err => {
        console.log(<any>err);
      }
    )
  }

  listarGenero() {
    this, this.generoService.listar().subscribe(
      res => {
        this.genero = res['data'];
      }, err => {
        console.log(<any>err);
      }
    )
  }



  agregar() {

    this.descripcionLIM = this.data.value.descripcion_limitaciones
    this.descripcionALE = this.data.value.descripcion_alergias

    if (this.descripcionLIM == null) {
      this.descripcionLIM = "ninguno"
    } else {
      this.descripcionLIM = this.data.value.descripcion_limitaciones
    }
    if (this.descripcionALE == null) {
      this.descripcionALE = "ninguno";
    } else {
      this.descripcionALE = this.data.value.descripcion_alergias
    }

    let data =
    {
      'nombres': this.data.value.nombres,
      'apellidos': this.data.value.apellidos,
      'fecha_nacimiento': this.data.value.fecha_nacimiento,
      'fecha_entrada': this.data.value.fecha_entrada,
      'fecha_final': this.data.value.fecha_fin,
      'numero': this.data.value.telefono,
      'celular': this.data.value.celular,
      'correo': this.data.value.correo,
      'eps': this.data.value.eps,
      'nombre_familiar': this.data.value.nombre_emergencia,
      'celular_familiar': this.data.value.celular_emergencia,
      'alergias': this.data.value.alergias,
      'descripcion_alergias': this.descripcionALE,
      'limitaciones': this.data.value.limitaciones,
      'descripcion_limitaciones': this.descripcionLIM,
      'tipo_documento': this.data.value.tipo_documento,
      'genero': this.data.value.genero,
      'pago': this.data.value.pago,
    };
    console.log(data);
    this.clienteService.agregar(data).subscribe(
      response => {
        console.log(response);
        this.generalService.abrirMensaje("Se ha agreado correctamente", "success");
        this.router.navigate(['/usuario']);
      },
      error => {
        console.log(<any>error);
      }
    )

  }

}