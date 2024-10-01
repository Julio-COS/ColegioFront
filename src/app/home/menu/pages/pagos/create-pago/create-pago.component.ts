import { Component, OnInit } from '@angular/core';
import { Pago, PagoResponse } from '../../../../../interface/Pago';
import { ConnectionService } from '../../../../../service/connection.service';
import { Alumno } from '../../../../../interface/Alumno';
import { ComprobantePago, ComprobantePagoResponse } from '../../../../../interface/ComprobantePago';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pago',
  templateUrl: './create-pago.component.html',
  styleUrl: './create-pago.component.css'
})
export class CreatePagoComponent implements OnInit{
  dataEstudiante:Alumno[]=[];
  data:Pago=new PagoResponse();
  dataComprobante:ComprobantePago=new ComprobantePagoResponse();

  constructor(
    private connectionService:ConnectionService,
    private router: Router
  ){}

  ngOnInit(): void {
    const urlSegments =this.router.url.split('/')
    const id=urlSegments[urlSegments.length-1];
    this.connectionService.getPago(id).subscribe(data=>{
      this.data=data;
      this.connectionService.getAlumnos().subscribe(
        data=>{
          this.dataEstudiante=data
          this.handleEstudianteSeleccionado(this.data.idEstudiante);
        });
    });
  }
  
  handleEstudianteSeleccionado(idEstudiante:number){
    this.data.idEstudiante = idEstudiante;
  }
  

  addData(){
    this.connectionService.putPago(this.data).subscribe();
    
    this.detalle()

    this.connectionService.postComprobantePago(this.dataComprobante).subscribe();
  }

  detalle(){
    this.dataComprobante.detalles=
    `Número de Comprobante: ${this.dataComprobante.idComprobante}
     Fecha de Emisión: ${this.dataComprobante.fechaEmision}
     Tipo de Pago: ${this.data.tipoPago}`
  }
}
