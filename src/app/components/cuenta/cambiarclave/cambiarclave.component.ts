import { Component, OnInit } from '@angular/core';
import { CuentaService } from 'src/app/services/cuenta.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-cambiarclave',
  templateUrl: './cambiarclave.component.html',
  styleUrls: ['./cambiarclave.component.scss']
})
export class CambiarclaveComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private cuentaService: CuentaService,
    private location: Location,
    private route: ActivatedRoute,
    private generalService:GeneralService,
    private router: Router,
  ) { }
  public formulario: FormGroup;
  public idCuenta: any;

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      clave: ['', Validators.required],
      confirmar_contraseña: ['', Validators.required],
    });

    this.route.params.subscribe(params => this.idCuenta = params['id']);
  }

  editar() {
    if (this.formulario.value.clave != this.formulario.value.confirmar_contraseña) {
      this.generalService.abrirMensaje("las contraseñas no coinciden","error")
    }
    else {
      let data =
      {
        'id': this.idCuenta,
        'clave': this.formulario.value.clave,
        'clave_repetida': this.formulario.value.confirmar_contraseña,
      };
      this.cuentaService.editarclave(data).subscribe(
        res => {
          this.generalService.abrirMensaje("Contraseña cambiada correctamente", "succes");
          this.router.navigate(['/cuentas']);
        },
        err => {
          console.log(<any>err);
        }
      );
    }
  }

  

}
