import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlimentacionService } from 'src/app/services/alimentacion.service';

@Component({
  selector: 'app-agregar-alimentacion',
  templateUrl: './agregar-alimentacion.component.html',
  styleUrls: ['./agregar-alimentacion.component.scss']
})
export class AgregarAlimentacionComponent implements OnInit {

  public data: FormGroup;
  public idHistoria: any;
  public fecha: any;

  constructor(
    private generalService: GeneralService,
    private alimentacionService: AlimentacionService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => (this.idHistoria = params['id']));
    this.data = this.formBuilder.group({
      desayuno	: ['', Validators.required],
      colacion_mañana: ['', Validators.required],
      almuerzo: ['', Validators.required],
      colacion_tarde: ['', Validators.required],
      cena: ['', Validators.required],
      colacion_trasnocho: ['', Validators.required],
      alimentos_no_permitidos: ['', Validators.required],
    });
  }

  agregar() {
    const data = {
      'desayuno': this.data.value.desayuno,
      'colacion_mañana': this.data.value.colacion_mañana,
      'almuerzo': this.data.value.almuerzo,
      'colacion_tarde': this.data.value.colacion_tarde,
      'cena': this.data.value.cena,
      'colacion_trasnocho': this.data.value.colacion_trasnocho,
      'alimentos_no_permitidos': this.data.value.alimentos_no_permitidos,
      'idHistoria': this.idHistoria
    };
    this.alimentacionService.agregar(data).subscribe(
      res => {
        this.generalService.abrirMensaje('Se ha creado correctamente', 'success');
        this.router.navigate(['/historia/ver/' + 2]);
      }, err => {
        console.log(err);
      }
    )
  }

}
