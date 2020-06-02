import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlimentacionService } from 'src/app/services/alimentacion.service';

@Component({
  selector: 'app-agregar-plan',
  templateUrl: './agregar-plan.component.html',
  styleUrls: ['./agregar-plan.component.scss']
})
export class AgregarPlanComponent implements OnInit {

  
  public data: FormGroup;
  public idHistoria: any;
  public fecha: any;

  constructor(
    private generalService: GeneralService,
    private analisisService: AlimentacionService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => (this.idHistoria = params['id']));
    this.data = this.formBuilder.group({
      candidato: ['', Validators.required],
      estudios: ['', Validators.required],
      electrocardiograma: ['', Validators.required],
      ecocardiograma: ['', Validators.required],
      esfuerzo: ['', Validators.required],
      interconsulta: ['', Validators.required],
      descripcion_interconsulta: ['', Validators.required],
      control_en: ['', Validators.required],
    });
  }

  agregar() {
    const data = {
      'candidato' : this.data.value.candidato,
      'estudios': this.data.value.estudios,
      'electrocardiograma': this.data.value.electrocardiograma,
      'ecocardiograma': this.data.value.ecocardiograma,
      'esfuerzo': this.data.value.esfuerzo,
      'interconsulta': this.data.value.interconsulta,
      'descripcion_interconsulta': this.data.value.descripcion_interconsulta,
      'control_en': this.data.value.control_en,
      'idHistoria': 2,
    };
    this.analisisService.agregar(data).subscribe(
      res => {
        this.generalService.abrirMensaje('Se ha creado correctamente', 'success');
        this.router.navigate(['/historia/ver/' + 2]);
      }, err => {
        console.log(err);
      }
    )
  }

}

