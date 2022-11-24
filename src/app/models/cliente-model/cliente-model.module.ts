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
  codigo: number;
}


export class InfoProductoDTO {

  productoDescripcion: string;

  productoIva: string;

  productoNombre : string;

  productoPorcentajeDescuento : string;

  productoValor : string;

  categoria: { categoriaId: string }



  constructor() {

    this.productoDescripcion = '',

    this.productoIva = '',

    this.productoNombre = '',

    this.productoPorcentajeDescuento = '',

    this.productoValor = '',

    this.categoria = null

  }

}