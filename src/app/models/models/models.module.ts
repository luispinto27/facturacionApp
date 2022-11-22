export class InfoCategoriaDTO {
  categoriaId: string;
  categoriaCodigo: string;
  categoriaDescripcion: string;
  categoriaEstado: boolean;
  categoriaFechaCreacion: Date;
  categoriaFechaModificacion: Date;

  constructor() {
    this.categoriaId = '';
    this.categoriaCodigo = '';
    this.categoriaDescripcion = '';
    this.categoriaEstado = true;
    this.categoriaFechaCreacion = new Date();
    this.categoriaFechaModificacion = new Date();
  }
}

export class InfoResponseCategoriaDTO {
  codigo: number;
}

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
  vendedorNombres: string;
  vendedorApellidos: string;
  vendedorNumeroIdentificacion: string;
  vendedorTelefono: string;
  vendedorCorreoElectronico: string;
  vendedorFechaNacimiento: Date;
  vendedorGenero: string;
  estado: boolean;
  password: string;

  constructor() {
    this.vendedorNombres = '';
    this.vendedorApellidos = '';
    this.vendedorNumeroIdentificacion = '';
    this.vendedorTelefono = '';
    this.vendedorCorreoElectronico = '';
    this.vendedorFechaNacimiento = new Date();
    this.vendedorGenero = '';
    this.estado = true;
    this.password = '';
  }
}

export class InfoResponseClienteDTO {
  codigo: number;
}
