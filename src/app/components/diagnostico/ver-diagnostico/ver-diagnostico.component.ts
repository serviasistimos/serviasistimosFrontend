import { Component, OnInit } from '@angular/core';
import { DiagnosticoService } from 'src/app/services/diagnostico.service';
import { GeneralService } from 'src/app/services/general.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-diagnostico',
  templateUrl: './ver-diagnostico.component.html',
  styleUrls: ['./ver-diagnostico.component.scss']
})
export class VerDiagnosticoComponent implements OnInit {

  constructor(
    private generalService: GeneralService,
    private formBuilder: FormBuilder,
    private diagnosticoService:DiagnosticoService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  public data: FormGroup;
  public idDiagnostico: any;
  public diagnostico:any =[];

  ngOnInit() {

    this.route.params.subscribe(params => this.idDiagnostico = params['id']);
    console.log(this.idDiagnostico);
    this.consultar();
  }

  consultar(){
    this.diagnosticoService.consultar(this.idDiagnostico).subscribe(
      response =>{
        console.log(response);
        this.diagnostico = response.datos;
      },error=>{
        console.log(error);
      }
    )
  }
}
