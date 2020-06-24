import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  public users: any = [];
  public idUser: number;
  constructor(private readonly userService: UserService, private readonly generalService: GeneralService) {
    this.idUser = 0;
   }


  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      res => {
        this.users = res.users;
      }, err => {
        this.generalService.abrirMensaje('Ocurrio un Error', 'error');
      });
  }

  leftClick(id) {
    this.idUser = id;
  }

}
