import { Component, OnInit } from '@angular/core';
import { MedidasService } from 'src/app/services/medidas.service';
import { GeneralService } from 'src/app/services/general.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-medida',
  templateUrl: './editar-medida.component.html',
  styleUrls: ['./editar-medida.component.scss']
})
export class EditarMedidaComponent implements OnInit {

  constructor(
    private medidasService: MedidasService,
    private generalService: GeneralService,
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
  ) { }
  public idMedida: any;
  public data: FormGroup;
  public talla: any;
  public pesoo: any;
  public medida: any = [];


  ngOnInit() {
    this.route.params.subscribe(params => this.idMedida = params['id']);
    this.data = this.formBuilder.group({
      peso: ['', Validators.required],
      altura: ['', Validators.required],
      grasa: ['', Validators.required],
      masa_muscular: ['', Validators.required],
      musculo: ['', Validators.required],
      masa_grasa: ['', Validators.required],
      muneca_derecha: ['', Validators.required],
      indice_corporal: ['', Validators.required],
      complexion_corporal: ['', Validators.required],
      cuello: ['', Validators.required],
      pecho: ['', Validators.required],
      abdomen_superior: ['', Validators.required],
      abdomen_medio: ['', Validators.required],
      abdomen_inferior: ['', Validators.required],
      cadera: ['', Validators.required],
      Brazo_derecho_relajado: ['', Validators.required],
      Brazo_derecho_contraido: ['', Validators.required],
      Brazo_izquierdo_relajado: ['', Validators.required],
      Brazo_izuqierdo_contraido: ['', Validators.required],
      Muslo_derecho: ['', Validators.required],
      Muslo_izuqierdo: ['', Validators.required],
      pantorrilla_derecha: ['', Validators.required],
      Pantorrilla_izuqierda: ['', Validators.required],
    });
    this.consultar();
  }

  agregar() {
    this.location.back();
  }
  consultar() {
    this.medidasService.consultar(this.idMedida).subscribe(
      response => {
        this.medida = response['data'];
        console.log(this.medida);

      }, error => {
        console.log(<any>error);
      }
    )

  }

}
