import { Component } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { HttpClient } from '@angular/common/http';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'calidadweb';
  public loginstatus  = localStorage.getItem("loginstatus");


  constructor(
    private permissionsService: NgxPermissionsService,
    private http: HttpClient
  )
  {
    this.permisos();
  }
  

  permisos() : void
  {
    if (this.loginstatus == 'true') {
      const perm = ["ADMIN", "LIDER", "USUARIO", "VISITANTE"];
      this.permissionsService.loadPermissions(perm);
      let currper = GeneralService.LOGINDATA['rol'];
      let permissions = [currper];
      this.permissionsService.loadPermissions(permissions);
    }
  }

}
