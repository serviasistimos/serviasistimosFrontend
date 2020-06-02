import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Login
import { LoginComponent } from './components/login/login.component';
//Administrador
import { AdministracionComponent } from './components/administracion/administracion/administracion.component';

//cuentas
import {AgregarCuentaComponent} from './components/cuenta/agregar-cuenta/agregar-cuenta.component';
import { CuentaComponent } from './components/cuenta/cuenta/cuenta.component';
import {CambiarclaveComponent} from './components/cuenta/cambiarclave/cambiarclave.component';
import {EditarCuentaComponent} from './components/cuenta/editar-cuenta/editar-cuenta.component';



import { UsuarioComponent } from './components/usuario/usuario/usuario.component';
import { AgregarUsuarioComponent } from './components/usuario/agregar-usuario/agregar-usuario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EditarUsuarioComponent } from './components/usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './components/usuario/eliminar-usuario/eliminar-usuario.component';
import { VerUsuarioComponent } from './components/usuario/ver-usuario/ver-usuario.component';
import { UsuariosinactivosComponent } from './components/usuario/usuariosinactivos/usuariosinactivos.component';

import { AgregarMedidaComponent } from './components/medidas/agregar-medida/agregar-medida.component';
import { EditarMedidaComponent } from './components/medidas/editar-medida/editar-medida.component';
import { EliminarMedidaComponent } from './components/medidas/eliminar-medida/eliminar-medida.component';

import { AgregarHistoriaComponent } from './components/historia/agregar-historia/agregar-historia.component';
import { EditarHistoriaComponent } from './components/historia/editar-historia/editar-historia.component';
import { EliminarHistoriaComponent } from './components/historia/eliminar-historia/eliminar-historia.component';
import { VerDiagnosticoComponent } from './components/diagnostico/ver-diagnostico/ver-diagnostico.component';
import { AgregarDiagnosticoComponent } from './components/diagnostico/agregar-diagnostico/agregar-diagnostico.component';

import { EpsComponent } from './components/eps/eps/eps.component';
import { AgregarepsComponent } from './components/eps/agregareps/agregareps.component';
import { EditarepsComponent } from './components/eps/editareps/editareps.component';


import { AgregarExamenFisicoComponent } from './components/examen_fisico/agregar-examen-fisico/agregar-examen-fisico.component';
import { EditarExamenFisicoComponent } from './components/examen_fisico/editar-examen-fisico/editar-examen-fisico.component';

import { AgregarAnalisisComponent } from './components/analisis/agregar-analisis/agregar-analisis.component';
import { EditarAnalisisComponent } from './components/analisis/editar-analisis/editar-analisis.component';

import { AgregarAlimentacionComponent } from './components/alimentacion/agregar-alimentacion/agregar-alimentacion.component';
import { EditarAlimentacionComponent } from './components/alimentacion/editar-alimentacion/editar-alimentacion.component';


const routes: Routes = [
  {path: 'login', component : LoginComponent },
  // administracion
  {path: 'administracion', component : AdministracionComponent },


  // eps
  {path: 'eps', component : EpsComponent },
  {path: 'eps/agregar', component : AgregarepsComponent },
  {path: 'eps/editar/:id', component : EditarepsComponent },

  // cuentas
  {path: 'cuentas', component : CuentaComponent },
  {path: 'cuentas/agregar', component : AgregarCuentaComponent },
  {path: 'cuentas/clave/:id', component : CambiarclaveComponent },
  {path: 'cuenta/editar/:id', component : EditarCuentaComponent },

  {path: '', component : InicioComponent },
  {path: 'usuario', component : UsuarioComponent},
  {path: 'usuario/agregar', component : AgregarUsuarioComponent},
  {path: 'usuario/editar/:id', component : EditarUsuarioComponent},
  {path: 'usuario/eliminar/:id', component : EliminarUsuarioComponent},
  {path: 'usuario/ver/:id', component : VerUsuarioComponent},
  {path: 'usuario/inactivos', component : UsuariosinactivosComponent},

// diagnostico
{path: 'diagnostico/agregar/:id', component : AgregarDiagnosticoComponent},
{path: 'diagnostico/ver/:id', component : VerDiagnosticoComponent},

  // historias
  {path: 'historia/agregar/:id', component : AgregarHistoriaComponent},
  {path: 'historia/ver/:id', component : EditarHistoriaComponent},
  {path: 'historia/eliminar/:id', component : EliminarHistoriaComponent},

// Medidas  
  {path: 'medidas/agregar/:id', component : AgregarMedidaComponent},
  {path: 'medidas/ver/:id', component : EditarMedidaComponent},
  {path: 'medidas/eliminar/:id', component : EliminarMedidaComponent},

  // Examen Fisico 
  {path: 'examen/fisico/agregar/:id', component : AgregarExamenFisicoComponent},
  {path: 'examen/fisico/ver/:id', component : EditarExamenFisicoComponent},

   // Analisis
   {path: 'analisis/agregar/:id', component : AgregarAnalisisComponent},
   {path: 'analisis/ver/:id', component : EditarAnalisisComponent},
   
   // ALIMENTACION
   {path: 'alimentacion/agregar/:id', component : AgregarAlimentacionComponent},
   {path: 'alimentacion/ver/:id', component : EditarAlimentacionComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
