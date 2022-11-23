import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export class InfoClienteDTO {
  clienteNombres: string;
  clienteApellidos: string;
  clienteNumeroIdentificacion: string;
  clienteTelefono: string;
  clienteCorreoElectronico: string;
  clienteFechaNacimiento: Date;
  clienteGenero: string;
  estado: boolean;

  constructor() {
    this.clienteNombres = '';
    this.clienteApellidos = '';
    this.clienteNumeroIdentificacion = '';
    this.clienteTelefono = '';
    this.clienteCorreoElectronico = '';
    this.clienteFechaNacimiento = new Date();
    this.clienteGenero = '';
    this.estado = true;
  }
}

export class InfoResponseClienteDTO {
 
   clienteNombres = '';
    clienteApellidos = '';
    clienteNumeroIdentificacion = '';
    clienteTelefono = '';
    clienteCorreoElectronico = '';
    clienteFechaNacimiento = new Date();
    clienteGenero = '';
    estado = true;
  
}

export class InfoFacturaDTO {

 
  facturaTotal:number;
  facturaFecha:Date;
  facturaObservacion:String;
  idcliente:number;
  id:number;
  facturaDetalleCantidad:number;
  facturaDetalleSubTotal:number;
  facturaDetalleSubDescuento:number;
  productoId:number;
  

  constructor() {


    this.facturaTotal = 0;
    this.facturaFecha=null;
    this.facturaObservacion='';
    this.idcliente= 0;
    this.id= 0;
    this.facturaDetalleCantidad= 0;
    this.facturaDetalleSubTotal= 0;
    this.facturaDetalleSubDescuento= 0;
    this.productoId= 0;
 
  }
}
