import { Injectable, Input } from '@angular/core';
import Swal from 'sweetalert2'
import { Observable } from 'rxjs';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() {
  }

  public abrirConfirmacion(): any {
    const observable = new Observable(observer => {
      Swal.fire({
        title: '¿Está seguro?',
        text: '',
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

  abrirMensaje(msg, type) {
    let title = 'Mensaje';
    if (type === 'success') {
      title = '!Buen trabajo!';
    } else {
      title = 'Error';
    }

    Swal.fire(
      title,
      msg,
      type
    );
  }
}
