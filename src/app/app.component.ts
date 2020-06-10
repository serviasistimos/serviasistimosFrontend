import { Component } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ServiAsistimos';
  public loginstatus = localStorage.getItem('loginstatus');


  constructor(
    private permissionsService: NgxPermissionsService,
    private http: HttpClient
  ) {

  }


  // permisos(): void {
  //   if (this.loginstatus ===  'true') {
  //     const perm = ['ADMIN', 'LIDER', 'USUARIO', 'VISITANTE'];
  //     this.permissionsService.loadPermissions(perm);
  //     const currper = GeneralService.LOGINDATA['rol'];
  //     const permissions = [currper];
  //     this.permissionsService.loadPermissions(permissions);
  //   }
  // }

}
