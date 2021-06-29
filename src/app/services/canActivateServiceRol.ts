import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { EncryptService } from './encrypt.service';
import { GeneralService } from './general.service';

@Injectable()
export class CanActivateRolAuthGuard implements CanActivate {

    constructor(
        private encryptService: EncryptService,
        private router: Router,
        private generalService: GeneralService
    ) { }

    canActivate() {
        const data = this.encryptService.getValue();
        console.log(data.user.role);
        if (data.user.role != 'Administrador') {
            this.generalService.abrirMensaje('No tienes Permisos', 'error');
            this.router.navigate(['']);
            return false;
        } else {
            return true;
        }

    }
}