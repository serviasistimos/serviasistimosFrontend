import { Component, OnInit } from '@angular/core';
import { MedidasService } from 'src/app/services/medidas.service';
import { GeneralService } from 'src/app/services/general.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-medida',
  templateUrl: './agregar-medida.component.html',
  styleUrls: ['./agregar-medida.component.scss']
})
export class AgregarMedidaComponent implements OnInit {

  constructor(
    private medidasService: MedidasService,
    private generalService: GeneralService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  public idCliente: any;
  public data: FormGroup;
  public talla: any;
  public pesoo: any;
  public fecha:any;


  ngOnInit() {
    let n = new Date();
    let y = n.getFullYear();
    let m = n.getMonth() + 1;
    let d = n.getDate();
    this.fecha = d + "/" + m + "/" + y;
    this.route.params.subscribe(params => this.idCliente = params['id']);
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

  }

  public resultado: number;


  agregar() {

    let pesoo = this.data.value.peso;
    let alturaa = this.data.value.altura;
    this.resultado = alturaa * alturaa % pesoo;
    
    let json = {
      "peso": this.data.value.peso,
      "altura": this.data.value.altura,
      "imc": this.resultado,
      "grasa": this.data.value.grasa,
      "musculo": this.data.value.musculo,
      "masa_grasa": this.data.value.masa_grasa,
      "masa_muscular": this.data.value.masa_muscular,
      "muneca_derecha": this.data.value.muneca_derecha,
      "indice_corporal": this.data.value.indice_corporal,
      "complexion_corporal": this.data.value.complexion_corporal,
      "cuello": this.data.value.cuello,
      "pecho": this.data.value.pecho,
      "abdomen_superior": this.data.value.abdomen_superior,
      "abdomen_medio": this.data.value.abdomen_medio,
      "abdomen_inferior": this.data.value.abdomen_inferior,
      "cadera": this.data.value.cadera,
      "Brazo_derecho_relajado": this.data.value.Brazo_derecho_relajado,
      "Brazo_derecho_contraido": this.data.value.Brazo_derecho_contraido,
      "Brazo_izquierdo_relajado": this.data.value.Brazo_izquierdo_relajado,
      "Brazo_izuqierdo_contraido": this.data.value.Brazo_izuqierdo_contraido,
      "Muslo_derecho": this.data.value.Muslo_derecho,
      "Muslo_izuqierdo": this.data.value.Muslo_izuqierdo,
      "pantorrilla_derecha": this.data.value.pantorrilla_derecha,
      "Pantorrilla_izuqierda": this.data.value.Pantorrilla_izuqierda,
      "fecha_consulta":this.fecha,
      "cliente": this.idCliente
    }
    console.log(json);
    this.medidasService.agregar(json).subscribe(
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
