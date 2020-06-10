import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UsuarioComponent } from './components/usuario/usuario/usuario.component';
import { AgregarUsuarioComponent } from './components/usuario/agregar-usuario/agregar-usuario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EliminarUsuarioComponent } from './components/usuario/eliminar-usuario/eliminar-usuario.component';






const routes: Routes = [
  {path: '', component : InicioComponent },
  {path: '', component : LoginComponent },
  {path: 'usuario', component : UsuarioComponent},
  {path: 'usuario/agregar', component : AgregarUsuarioComponent},
  {path: 'usuario/eliminar/:id', component : EliminarUsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
