import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/requestService';
import { tap, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ServicesService } from 'src/app/services/servicesService';
import { CostumerService } from 'src/app/services/costumerService';
import { TechnicalService } from 'src/app/services/techicalService';
import { EncryptService } from 'src/app/services/encrypt.service';
import { User } from 'src/app/models/user';
import { InsuranceService } from 'src/app/services/insuranceService';


@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.scss']
})
export class AddRequestComponent implements OnInit {

  public formGroupUser: FormGroup;
  public costumers: any = [];
  public service: any = [];
  public insurance: any = [];
  public technical: any = [];
  public user: User;
  constructor(
    private readonly generalService: GeneralService,
    private formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly requestService: RequestService,
    private readonly serviceService: ServicesService,
    private readonly costumerService: CostumerService,
    private readonly technicalService: TechnicalService,
    private readonly encryptService: EncryptService,
    private readonly insuranceService: InsuranceService
  ) {
    this.user = new User();
  }



  ngOnInit() {
    this.initializeList();
    this.user = this.encryptService.getValue();
    this.formGroupUser = this.formBuilder.group({
      valueMaterials: ['', Validators.required],
      valueAsistimos: ['', Validators.required],
      valueCostumer: ['', Validators.required],
      reference: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      department: ['', Validators.required],
      state: ['', Validators.required],
      costumer: ['', Validators.required],
      service: ['', Validators.required],
      technical: ['', Validators.required]
    });
  }

  public async initializeList() {
    this.getService();
    this.getTechnical();
    this.getCustomer();
    this.getInsurance();
  }

  public async getService() {
    this.serviceService.getService().subscribe(
      res => {
        this.service = res.services;
      }, errror => {
      });
  }

  public async getCustomer() {
    this.costumerService.getCostumer().subscribe(
      res => {
        this.costumers = res.costumers;
      }, errror => {
      });
  }
  public async getTechnical() {
    this.technicalService.getTechnical().subscribe(
      res => {
        this.technical = res.technical;
      }, errror => {
      });
  }
  public async getInsurance() {
    this.insuranceService.getInsurance().subscribe(
      res => {
        this.insurance = res.insurance;
      }, err => {
      });
  }


  captureInformation() {
    const data = {
      valueMaterials: this.formGroupUser.value.valueMaterials,
      valueAsistimos: this.formGroupUser.value.valueAsistimos,
      valueCostumer: this.formGroupUser.value.valueCostumer,
      reference: this.formGroupUser.value.reference,
      phone: this.formGroupUser.value.phone,
      address: this.formGroupUser.value.address,
      city: this.formGroupUser.value.city,
      department: this.formGroupUser.value.department,
      state: this.formGroupUser.value.state,
      costumer: this.formGroupUser.value.costumer,
      service: this.formGroupUser.value.service,
      technical: this.formGroupUser.value.technical,
      user: this.user.user._id
    };
    console.log(data);
    this.agregar(data);
  }

  agregar(data) {
    this.requestService.postRequest(data).subscribe(
      res => {
        console.log(res);
        this.generalService.abrirMensaje('Agregado Correctamente', 'success');
        this.router.navigate(['/request']);
      }, err => {
        console.log(err);
        this.generalService.abrirMensaje('Ocurrio un Error', 'error');
      });

  }

}
