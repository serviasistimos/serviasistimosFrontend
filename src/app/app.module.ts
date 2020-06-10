import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ShContextMenuModule } from 'ng2-right-click-menu'
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxPermissionsModule } from 'ngx-permissions';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DataTablesModule } from 'angular-datatables';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './components/usuario/usuario/usuario.component';
import { EliminarUsuarioComponent } from './components/usuario/eliminar-usuario/eliminar-usuario.component';
import { AgregarUsuarioComponent } from './components/usuario/agregar-usuario/agregar-usuario.component';
import { HeaderComponent } from './components/complements/header/header.component';
import { MenuComponent } from './components/complements/menu/menu.component';
import { FooterComponent } from './components/complements/footer/footer.component';
import { NotfoundComponent } from './components/complements/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    EliminarUsuarioComponent,
    AgregarUsuarioComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    NotfoundComponent,
    LoginComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
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
    DatePipe,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
