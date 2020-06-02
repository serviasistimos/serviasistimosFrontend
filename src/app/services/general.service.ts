import { Injectable, Input} from '@angular/core';
import Swal from 'sweetalert2'
import { Observable } from 'rxjs';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class GeneralService   {
  
  //Variables globales
  public static get WS_URL() : String{
    return "http://localhost/iron-gym/public/ws/";
  }
  
  public static get LOGINDATA() : String{
    return JSON.parse(localStorage.getItem("logindata"));
  }

  constructor(){
  }
/*
  abrirSpinner(){
    this.spinner.show();
  }

  cerrarSpinner(){
    this.spinner.hide();
  }
  */
  // Mensajes de alerta
  public abrirConfirmacion() : any
  {
    const observable = new Observable(observer => {
      Swal.fire({
        title: '¿Está seguro?',
        text: "",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: '¡Cancelar!',
        confirmButtonText: '¡Confirmar!'
      }).then((result) => {
        if (result.value) {
          observer.next(true);
        }
      });
    });
    return observable;
  }

  abrirMensaje(msg, type)
  {
    let title = "Mensaje";
    if(type == "success")
      title = "!Buen trabajo!"
    else
      title = "Error"

    Swal.fire(
      title,
      msg,
      type
    );
  }
  //Fin Mensajes de alerta 
  
  //Export
  public static get EXPORT_OPTIONS()
  {
    var opciones = {};
    opciones = {
      language:{
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "Cargando...",
        buttons: {
          print: 'Imprimir',
          excel: "Exportar a Excel ",
          },
        "oPaginate": {
          "sFirst":    "Primero",
          "sLast":     "Último",
          "sNext":     "Siguiente",
          "sPrevious": "Anterior"
        }  
      },

      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      // Configure the buttons
      buttons: [
        { extend: 'print', className: 'uk-button uk-button-primary' },
        { extend: 'excel', className: 'uk-button uk-button-danger' },
        { extend: 'pdf', className: 'uk-button uk-button-danger' },
      ],
    };
   
    return opciones;
  }
 
}
