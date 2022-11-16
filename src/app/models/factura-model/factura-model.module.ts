import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


export class InfoFacturaDTO {
  numeroFactura: number;  
  facturaFecha:Date;
  facturaObservacion:String;
  totalFactura: number; 
  facturaCliente: number; 
  facturaVendedor: number; 


  constructor() {
    this.numeroFactura =0;    
    this.facturaFecha = new Date();
    this.facturaObservacion = '';
    this.totalFactura=0;
    this. facturaCliente=0;
    this. facturaVendedor=0;
  }

  
}


