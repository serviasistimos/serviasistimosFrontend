import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/services/general.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/userService';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

  public formGroupUser: FormGroup;

  constructor(
    private readonly generalService: GeneralService,
    private formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly userService: UserService
  ) { }



  ngOnInit() {
    this.formGroupUser = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      document: ['', Validators.required],
      role: ['', Validators.required],
      email: ['', [Validators.required,
      Validators.email]
      ],
      nickname: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
    });
  }

  captureInformation() {
    if (this.formGroupUser.value.password === this.formGroupUser.value.confirmpassword) {
      const data = {
        name: this.formGroupUser.value.name,
        lastName: this.formGroupUser.value.lastName,
        document: this.formGroupUser.value.document,
        role: this.formGroupUser.value.role,
        email: this.formGroupUser.value.email,
        nickname: this.formGroupUser.value.nickname,
        password: this.formGroupUser.value.password
      };
      this.agregar(data);
    } else {
      this.generalService.abrirMensaje('Las contraseñas no coinciden', 'error');
    }
  }

  agregar(data) {
    this.userService.postUser(data).subscribe(
      res => {
        this.generalService.abrirMensaje('Agregado Correctamente', 'success');
      }, err => {
        this.generalService.abrirMensaje('Ocurrio un Error', 'error');
      });

  }
}

