import { Component, OnInit } from '@angular/core';
import { CostumerService } from 'src/app/services/costumerService';
import { ServicesService } from 'src/app/services/servicesService';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  public service: any = [];
  public idService: number;
  public comentario: any;
  constructor(private readonly serviceService: ServicesService) { }


  ngOnInit() {
    this.getCustomer();
  }

  getCustomer() {
    this.serviceService.getService().subscribe(
      res => {
        console.log(res);
        this.service = res.services;
      }, errror => {
        console.log(errror);
      });
  }

  leftClick(id) {
    this.idService = id;
  }

  comment(comment) {
    this.comentario = comment;
    console.log(this.comentario);
  }

}
