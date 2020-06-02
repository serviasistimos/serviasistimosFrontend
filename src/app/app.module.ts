import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe, LocationStrategy, HashLocationStrategy } from '@angular/common';


//Libraries
import { ShContextMenuModule } from 'ng2-right-click-menu'
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxPermissionsModule } from 'ngx-permissions';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgxSpinnerModule } from "ngx-spinner";
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DataTablesModule } from 'angular-datatables';


//Complements
import { HeaderComponent } from './components/complements/header/header.component';
import { MenuComponent } from './components/complements/menu/menu.component';
import { FooterComponent } from './components/complements/footer/footer.component';
import { NotfoundComponent } from './components/complements/notfound/notfound.component';


// ## Pages ##

//servicio
import { LoginComponent } from './components/login/login.component';
import { GeneralService } from 'src/app/services/general.service';
import { LoginService } from 'src/app/services/login.service';
import { CheckpointService } from 'src/app/services/checkpoint.service';
import { AreaService } from 'src/app/services/area.service';
import { HistoriaService } from 'src/app/services/historia.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { DiagnosticoService } from 'src/app/services/diagnostico.service';
import {EpsService} from 'src/app/services/eps.service';
import {CuentaService} from 'src/app/services/cuenta.service';
import {RolService} from 'src/app/services/rol.service';
import {GeneroService} from 'src/app/services/genero.service';
import {AnalisisService} from 'src/app/services/analisis.service';




import { UsuarioComponent } from './components/usuario/usuario/usuario.component';
import { AgregarUsuarioComponent } from './components/usuario/agregar-usuario/agregar-usuario.component';
import { ReporteComponent } from './components/reporte/reporte/reporte.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EditarUsuarioComponent } from './components/usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './components/usuario/eliminar-usuario/eliminar-usuario.component';
import { AgregarHistoriaComponent } from './components/historia/agregar-historia/agregar-historia.component';
import { EditarHistoriaComponent } from './components/historia/editar-historia/editar-historia.component';
import { EliminarHistoriaComponent } from './components/historia/eliminar-historia/eliminar-historia.component';
import { AgregarMedidaComponent } from './components/medidas/agregar-medida/agregar-medida.component';
import { EditarMedidaComponent } from './components/medidas/editar-medida/editar-medida.component';
import { EliminarMedidaComponent } from './components/medidas/eliminar-medida/eliminar-medida.component';
import { VerUsuarioComponent } from './components/usuario/ver-usuario/ver-usuario.component';

import { UsuariosinactivosComponent } from './components/usuario/usuariosinactivos/usuariosinactivos.component';
import { AgregarDiagnosticoComponent } from './components/diagnostico/agregar-diagnostico/agregar-diagnostico.component';
import { VerDiagnosticoComponent } from './components/diagnostico/ver-diagnostico/ver-diagnostico.component';
import { VerComponent } from './components/historia/ver/ver.component';
import { AdministracionComponent } from './components/administracion/administracion/administracion.component';
import { EpsComponent } from './components/eps/eps/eps.component';
import { AgregarepsComponent } from './components/eps/agregareps/agregareps.component';
import { EditarepsComponent } from './components/eps/editareps/editareps.component';
import { CuentaComponent } from './components/cuenta/cuenta/cuenta.component';
import {AgregarCuentaComponent} from './components/cuenta/agregar-cuenta/agregar-cuenta.component';
import {CambiarclaveComponent} from './components/cuenta/cambiarclave/cambiarclave.component';
import {EditarCuentaComponent} from './components/cuenta/editar-cuenta/editar-cuenta.component';
import { AgregarExamenFisicoComponent } from './components/examen_fisico/agregar-examen-fisico/agregar-examen-fisico.component';
import { EditarExamenFisicoComponent } from './components/examen_fisico/editar-examen-fisico/editar-examen-fisico.component';
import { ExamenFisicoService } from './services/examenfisico.service';
import { AgregarAnalisisComponent } from './components/analisis/agregar-analisis/agregar-analisis.component';
import { EditarAnalisisComponent } from './components/analisis/editar-analisis/editar-analisis.component';

import { AlimentacionComponent } from './components/alimentacion/alimentacion/alimentacion.component';
import { AgregarAlimentacionComponent } from './components/alimentacion/agregar-alimentacion/agregar-alimentacion.component';
import { EditarAlimentacionComponent } from './components/alimentacion/editar-alimentacion/editar-alimentacion.component';
import { PlanComponent } from './components/plan/plan/plan.component';
import { AgregarPlanComponent } from './components/plan/agregar-plan/agregar-plan.component';
import { EditarPlanComponent } from './components/plan/editar-plan/editar-plan.component';

@NgModule({
  declarations: [

    AppComponent,
    UsuarioComponent,
    EliminarUsuarioComponent,
    AgregarUsuarioComponent,
    EditarUsuarioComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    NotfoundComponent,
    LoginComponent,
    ReporteComponent,
    InicioComponent,
    AgregarHistoriaComponent,
    EditarHistoriaComponent,
    CambiarclaveComponent,
    EliminarHistoriaComponent,
    EditarCuentaComponent,
    AgregarCuentaComponent,
    AgregarMedidaComponent,
    EditarMedidaComponent,
    EliminarMedidaComponent,
    VerUsuarioComponent,
    UsuariosinactivosComponent,
    AgregarDiagnosticoComponent,
    VerDiagnosticoComponent,
    VerComponent,
    AdministracionComponent,
    EpsComponent,
    AgregarepsComponent,
    EditarepsComponent,
    CuentaComponent,
    AgregarExamenFisicoComponent,
    EditarExamenFisicoComponent,
    AgregarAnalisisComponent,
    EditarAnalisisComponent,
    AlimentacionComponent,
    AgregarAlimentacionComponent,
    EditarAlimentacionComponent,
    PlanComponent,
    AgregarPlanComponent,
    EditarPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ShContextMenuModule,
    AngularEditorModule,
    BrowserModule,
    Ng2SearchPipeModule, 
    DataTablesModule,
    PdfJsViewerModule,
    NgxPaginationModule,
    PdfViewerModule,
    NgxPermissionsModule.forRoot(),
  ],
  providers: [
    GeneralService,
    LoginService,
    CheckpointService,
    AreaService,
    DiagnosticoService,
    HistoriaService,
    ClienteService,
    EpsService,
    GeneroService,
    CuentaService,
    ExamenFisicoService,
    AnalisisService,
    RolService,
    DatePipe,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
