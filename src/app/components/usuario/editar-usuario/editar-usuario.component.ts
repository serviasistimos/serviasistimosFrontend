import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {ClienteService} from 'src/app/services/cliente.service';
import { EpsService } from 'src/app/services/eps.service';
import { GeneroService } from 'src/app/services/genero.service';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

  constructor(
    private generalService: GeneralService,
    private clienteService: ClienteService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private epsService: EpsService,
    private generoService: GeneroService
  ) { }

  public data: FormGroup;
  public idUsuario;
  public cliente:any=[];
  public descripcionLIM: any;
  public descripcionALE: any;
  public eps: any = [];
  public genero: any = [];

  ngOnInit() {
    this.route.params.subscribe(params => this.idUsuario = params['id']);

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
      genero: ['', Validators.required],
      fecha_entrada: ['', Validators.required],
      fecha_fin: ['', Validators.required],
    });
    this.consultar();
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

  consultar(){
    this.clienteService.consultar(this.idUsuario).subscribe(
      response =>{
        this.cliente = response['data'];
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

  editar() {
  this.descripcionLIM = this.data.value.descripcion_limitaciones
    this.descripcionALE = this.data.value.descripcion_alergias

    if ( this.descripcionLIM == null) {
      this.descripcionLIM = "ninguno"
    }else{
      this.descripcionLIM = this.data.value.descripcion_limitaciones
    }
    if (this.descripcionALE == null) {
      this.descripcionALE = "ninguno";
    }else{
      this.descripcionALE = this.data.value.descripcion_alergias
    }
    console.log(this.descripcionALE);
    console.log(this.descripcionLIM);
    let data =
    {
      'id':this.idUsuario,
      'nombres': this.data.value.nombres,
      'apellidos': this.data.value.apellidos,
      'fecha_nacimiento': this.data.value.fecha_nacimiento,
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
      'genero': this.data.value.genero,
      'fecha_entrada': this.data.value.fecha_entrada,
      'fecha_final': this.data.value.fecha_fin,
    };
    this.clienteService.editar(data).subscribe(
      response => {
        this.generalService.abrirMensaje("Se ha editado correctamente","success");
        this.router.navigate(['/usuario']);
      },
      error => {
        console.log(<any>error);
      }
    )

  }

}
