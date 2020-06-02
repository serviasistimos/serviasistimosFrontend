import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CuentaService } from 'src/app/services/cuenta.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RolService } from 'src/app/services/rol.service';


@Component({
  selector: 'app-agregar-cuenta',
  templateUrl: './agregar-cuenta.component.html',
  styleUrls: ['./agregar-cuenta.component.scss']
})
export class AgregarCuentaComponent implements OnInit {

  constructor(
    private cuentaService: CuentaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private generalService: GeneralService,
    private location: Location,
    private rolService: RolService
  ) { }

  public formulario: FormGroup;
  public usuarios: any = [];
  public roles: any = [];

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      email: ['', Validators.required],
      clave: ['', Validators.required],
      rol: ['', Validators.required],
    });
    this.listarRoles();

  }

  listarRoles() {
    this.rolService.listar().subscribe(
      res => {
        this.roles = res['data'];
      }, err => {
        console.log(<any>err);
      }
    )
  }



  insertar() {
    let data =
    {
      'email': this.formulario.value.email,
      'clave': this.formulario.value.clave,
      'rol': this.formulario.value.rol
    };

    this.cuentaService.agregar(data).subscribe(
      response => {
        this.generalService.abrirMensaje("Cuenta Creada con exito", "success");
        this.router.navigate(['/cuentas']);
      },
      error => {
        this.generalService.abrirMensaje("Ha ocurrido un error", "error");
        console.log(<any>error);
      }
    )
  }

  // listarRoles()
  // {
  //   this.rolCuentaService.listar().subscribe(
  //     response => {
  //       this.roles = response['data'];
  //       console.log(this.roles);
  //     }
  //   )
  // }

}
