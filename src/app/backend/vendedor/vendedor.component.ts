import { Component,  OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
import { InfoVendedorDTO, EstadoVendedorDTO } from '../../models/models/models.module';
import { ServiceService } from '../../services/service.service';
import { NgForm } from '@angular/forms';
import { VendedorList } from 'src/app/models/models/vendedor-list';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.scss'],
})
export class VendedorComponent implements OnInit {
  
  passwordTypeInput = false;
  passwordToggleIcon = 'eye';
  noCambia: boolean = false;

  listVendedor: VendedorList[] = [];
  infoVendedor: InfoVendedorDTO = new InfoVendedorDTO();
  cambioEstado: EstadoVendedorDTO = new EstadoVendedorDTO();
  
  constructor(public menuController: MenuController,
              private service: ServiceService,
              private toastController: ToastController) { }

  ngOnInit() { }
  
  async guardarVendedor(formulario: NgForm) : Promise<void>{
   
    this.service.crearVendedor(this.infoVendedor).subscribe(async datos => {
      if (datos.codigo == 1) {       
        this.mostrarNotificaciones('Vendedor Guardado Correctamente');
        this.limpiarFiltros();
      } else {
        this.mostrarNotificaciones('Error al guardar el registro');
      }
    });
  }


  openMenu() {
    this.menuController.toggle('principal');
  }
  
  seleccionaPersona(datos: VendedorList) {
    this.infoVendedor.id = datos.id;
    this.infoVendedor.vendedorNombres = datos.vendedorNombres;
    this.infoVendedor.vendedorApellidos = datos.vendedorApellidos;
    this.infoVendedor.vendedorCorreoElectronico = datos.vendedorCorreoElectronico;
    this.infoVendedor.vendedorGenero = datos.vendedorGenero;
    this.infoVendedor.vendedorNumeroIdentificacion = datos.vendedorNumeroIdentificacion;
    this.infoVendedor.vendedorTelefono = datos.vendedorTelefono;
    this.infoVendedor.vendedorGenero = datos.vendedorGenero;
    this.infoVendedor.vendedorFechaNacimiento = datos.vendedorFechaNacimiento;
    this.cambioEstado.vendedorEstado = datos.vendedorEstado;
    this.noCambia = true;
  }

  async limpiarFiltros(){
    this.infoVendedor.vendedorNombres = '';
    this.infoVendedor.vendedorApellidos = '';
    this.infoVendedor.vendedorCorreoElectronico = '';
    this.infoVendedor.vendedorGenero = '';
    this.infoVendedor.vendedorNumeroIdentificacion = 0;
    this.infoVendedor.vendedorTelefono = '';
    this.cambioEstado.vendedorEstado = false;
    this.infoVendedor.vendedorFechaNacimiento = null;
    this.noCambia = false;
  }

  async mostrarNotificaciones(message: string){
      const toast = await this.toastController.create({
          message: message,
          duration: 1500,
          position: 'top'
      });
      await toast.present();
    }

  
    eliminar(element: InfoVendedorDTO){
      let index = this.listVendedor.findIndex(v => v.vendedorNumeroIdentificacion == element.vendedorNumeroIdentificacion);
      this.listVendedor.splice(index, 1);
      this.mostrarNotificaciones('Vendedor Eliminado');
    }

   async  mostrarDatos(){
      this.service.getAllVendedores().subscribe(response => {
          this.listVendedor = response.data;
      });
    }
    
    cambiarEstado(){
      this.cambioEstado.id = this.infoVendedor.id;
      this.service.actualizarEstado(this.cambioEstado).subscribe(response => {
          if (response.codigo == 1) {            
            this.mostrarNotificaciones('Vendedor actualizado');
            this.limpiarFiltros();
          }
      })

    }
}

