export class InfoClienteDTO {
  id: number;
  clienteNombres: string;
  clienteApellidos: string;
  clienteNumeroIdentificacion: number;
  clienteTelefono: string;
  clienteCorreoElectronico: string;
  clienteFechaNacimiento: Date;
  clienteGenero: string;
  estado: boolean;

  constructor() {
    this.clienteNombres = '';
    this.clienteApellidos = '';
    this.clienteNumeroIdentificacion = 0;
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

export class EstadoClienteDTO {
  id: number;
  clienteEstado: boolean;

  constructor(){
    this.id = 0;
    this.clienteEstado = true;
  }
}

export class InfoDataClientesDTO {
    codigo: number;
    data: InfoClienteDTO [];
}



