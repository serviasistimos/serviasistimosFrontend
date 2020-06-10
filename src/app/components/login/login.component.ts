import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GeneralService } from 'src/app/services/general.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public data: FormGroup;
  constructor(
    private readonly generalService: GeneralService,
    private readonly router: Router,
    private readonly userService: UserService,
    private readonly formBuilder: FormBuilder,
  ) { }



  ngOnInit() {
    this.data = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public async login() {
    const data = {
      'email': this.data.value.email,
      'password': this.data.value.password
    };
    console.log(data);
    this.userService.login(data).subscribe(
      res => {
        localStorage.setItem('loginstatus', 'true');
        localStorage.setItem('logindata', JSON.stringify(res));
        this.generalService.abrirMensaje('Ingreso correcto al sistema', 'success');
        window.location.href = '';
      }, err => {
        this.generalService.abrirMensaje('Verificar información', 'error');
      });
  }

}
