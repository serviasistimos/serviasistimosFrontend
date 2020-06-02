import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DiagnosticoService } from 'src/app/services/diagnostico.service';

@Component({
  selector: 'app-agregar-diagnostico',
  templateUrl: './agregar-diagnostico.component.html',
  styleUrls: ['./agregar-diagnostico.component.scss']
})
export class AgregarDiagnosticoComponent implements OnInit {

  constructor(
    private generalService: GeneralService,
    private formBuilder: FormBuilder,
    private diagnosticoService:DiagnosticoService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  public data: FormGroup;
  public idCliente: any;

  ngOnInit() {

    this.route.params.subscribe(params => this.idCliente = params['id']);
    console.log(this.idCliente);
    this.data = this.formBuilder.group({
      Hipertrofia: ['', Validators.required],
      bajar_peso: ['', Validators.required],
      Ganancia_fuerza: ['', Validators.required],
      Potencia: ['', Validators.required],
      capacidad_aerobica: ['', Validators.required],
    });
  }

  agregar() {

    let json = {
      "Hipertrofia":this.data.value.Hipertrofia,
      "bajar_peso":this.data.value.bajar_peso,
      "Ganancia_fuerza":this.data.value.Ganancia_fuerza,
      "Potencia":this.data.value.Potencia,
      "capacidad_aerobica":this.data.value.capacidad_aerobica,
      "cliente":this.idCliente
    }
    console.log(json);
    this.diagnosticoService.agregar(json).subscribe(
      response => {
        console.log(response);
        this.generalService.abrirMensaje("Se ha creado correctamente", "success");
        this.router.navigate(['/usuario/ver/'+this.idCliente]);

      },
      error => {
        console.log(<any>error);
      }
    )



  }

}
