import { Component } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { EncryptService } from './services/encrypt.service';
import { User } from './models/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ServiAsistimos';
  public loginstatus = localStorage.getItem('loginstatus');
  public user: User;
  public validation: boolean;


  constructor(
    private permissionsService: NgxPermissionsService,
    private readonly encryptService: EncryptService,
  ) {

    this.dataUser();
    this.permisos();
  }

  public dataUser() {
    this.user = new User();
    this.user = this.encryptService.getValue();
  }

  // const perm = ['Administrador', 'Usuario'];
  permisos(): void {
    const permissions = this.encryptService.getValue();
    this.permissionsService.loadPermissions([permissions.user.role]);
  }

}
