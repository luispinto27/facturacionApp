export class VendedorList {
    id: number;
    vendedorNombres: string;
    vendedorApellidos: string;
    vendedorNumeroIdentificacion: number;
    vendedorTelefono: string;
    vendedorCorreoElectronico: string;
    vendedorFechaNacimiento: Date;
    vendedorGenero: string;
    vendedorEstado: boolean;
  
    constructor() {
      this.id = 0;
      this.vendedorNombres = '';
      this.vendedorApellidos = '';
      this.vendedorNumeroIdentificacion = 0;
      this.vendedorTelefono = '';
      this.vendedorCorreoElectronico = '';
      this.vendedorFechaNacimiento = new Date();
      this.vendedorGenero = '';
      this.vendedorEstado = true;
    }
  }