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



