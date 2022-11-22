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

export class InfoVendedorDTO {
  id: number;
  vendedorNombres: string;
  vendedorApellidos: string;
  vendedorNumeroIdentificacion: number;
  vendedorTelefono: string;
  vendedorCorreoElectronico: string;
  vendedorFechaNacimiento: Date;
  vendedorGenero: string;
 // vendedorEstado: boolean;
 // vendedorContrasena: string;

  constructor() {
    this.id = 0;
    this.vendedorNombres = '';
    this.vendedorApellidos = '';
    this.vendedorNumeroIdentificacion = 0;
    this.vendedorTelefono = '';
    this.vendedorCorreoElectronico = '';
    this.vendedorFechaNacimiento = new Date();
    this.vendedorGenero = '';
  //  this.vendedorEstado = true;
  //  this.vendedorContrasena = '';
  }
}

export class EstadoVendedorDTO {
  id: number;
  vendedorEstado: boolean;

  constructor(){
    this.id = 0;
    this.vendedorEstado = true;
  }
}

export class InfoResponseClienteDTO {
  codigo: number;
}

export class InfoResponseVendedorDTO {
  codigo: number;
}

