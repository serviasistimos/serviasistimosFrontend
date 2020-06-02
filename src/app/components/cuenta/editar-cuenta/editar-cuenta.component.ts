
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CuentaService } from 'src/app/services/cuenta.service';
import { GeneralService } from 'src/app/services/general.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-editar-cuenta',
  templateUrl: './editar-cuenta.component.html',
  styleUrls: ['./editar-cuenta.component.scss']
})

export class EditarCuentaComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private cuentaService: CuentaService,
    private location: Location,
    private route: ActivatedRoute,
    private generalService:GeneralService,
    private rolService:RolService
  ) { }

  public formulario: FormGroup;
  public idCuenta: any;
  public cuenta: any = {};
  public roles: any = [];
  public cuentas: any = [];

  ngOnInit() 
  {

    this.listarRoles();
    this.formulario = this.formBuilder.group({
      email: ['', Validators.required],
      rol: ['', Validators.required],
    });

    this.route.params.subscribe(params => this.idCuenta = params['id']);
    this.consultar();
  }

  editar() 
  {
    let data =
    {
      'id': this.idCuenta,
      'nombre': this.formulario.value.nombre,
      'apellido': this.formulario.value.apellido,
      'email': this.formulario.value.email,
      'usuario': this.formulario.value.usuario,
      'rol': this.formulario.value.rol
    };

    this.cuentaService.editar(data).subscribe(
      response => {
        this.generalService.abrirMensaje("Cuenta editada correctamente", "success");
        this.location.back();
      },
      error => {
        this.generalService.abrirMensaje("Ha ocurrido un error", "error");
        console.log(<any>error);
      }
    );

  }


  consultar() {
    this.cuentaService.consultar(this.idCuenta).subscribe(
      response => {
        this.cuenta = response['data'];
        console.log(this.cuenta);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

 listarRoles() {
   this.rolService.listar().subscribe(
     response => {
       this.roles = response['data'];
       console.log(this.roles);
     },
     error => {
       console.log(<any>error);
     }
   )
 }




}