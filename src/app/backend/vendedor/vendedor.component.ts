import { Component,  OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
import { InfoVendedorDTO } from '../../models/models/models.module';
import { ServiceService } from '../../services/service.service';
import { NgForm } from '@angular/forms';
import { element } from 'protractor';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.scss'],
})
export class VendedorComponent implements OnInit {
  
  message = 'This modal example uses the modalController to present and dismiss modals.';
  passwordTypeInput = false;
  passwordToggleIcon = 'eye';
  noCambia: boolean = false;

  listVendedor: InfoVendedorDTO[] = [];
  infoVendedor: InfoVendedorDTO = new InfoVendedorDTO();
  
  constructor(public menuController: MenuController,
              private service: ServiceService,
              private toastController: ToastController) { }

  ngOnInit() { }
  
  guardarVendedor(formulario: NgForm){
    // this.service.crearVendedor(this.infoVendedor);
    this.listVendedor.push({
      vendedorNombres: this.infoVendedor.vendedorNombres,
      vendedorApellidos: this.infoVendedor.vendedorApellidos,
      vendedorCorreoElectronico: this.infoVendedor.vendedorCorreoElectronico,
      vendedorFechaNacimiento: this.infoVendedor.vendedorFechaNacimiento,
      vendedorGenero: this.infoVendedor.vendedorGenero,
      vendedorNumeroIdentificacion: this.infoVendedor.vendedorNumeroIdentificacion,
      estado: this.infoVendedor.estado,
      password: this.infoVendedor.password,
      vendedorTelefono: this.infoVendedor.vendedorTelefono
    });
    this.limpiarFiltros();
    this.mostrarNotificaciones('Vendedor Guardado Correctamente');
    
  }

  showPassword(){
    this.passwordTypeInput = !this.passwordTypeInput;
    if (this.passwordToggleIcon === 'eye') {
      this.passwordToggleIcon = 'eye-off';
    } else {
      this.passwordToggleIcon = 'eye';
    }     
  }

  openMenu() {
    this.menuController.toggle('principal');
  }
  
  seleccionaPersona(datos: InfoVendedorDTO) {
    this.infoVendedor.vendedorNombres = datos.vendedorNombres;
    this.infoVendedor.vendedorApellidos = datos.vendedorApellidos;
    this.infoVendedor.vendedorCorreoElectronico = datos.vendedorCorreoElectronico;
    this.infoVendedor.vendedorGenero = datos.vendedorGenero;
    this.infoVendedor.vendedorNumeroIdentificacion = datos.vendedorNumeroIdentificacion;
    this.infoVendedor.vendedorTelefono = datos.vendedorTelefono;
    this.infoVendedor.estado = datos.estado;
    this.infoVendedor.vendedorGenero = datos.vendedorGenero;
    this.noCambia = true;
  }
  
  async limpiarFiltros(){
    this.infoVendedor.vendedorNombres = '';
    this.infoVendedor.vendedorApellidos = '';
    this.infoVendedor.vendedorCorreoElectronico = '';
    this.infoVendedor.vendedorGenero = '';
    this.infoVendedor.vendedorNumeroIdentificacion = '';
    this.infoVendedor.vendedorTelefono = '';
    this.infoVendedor.estado = false;
    this.infoVendedor.password = '';
    this.infoVendedor.vendedorGenero = '';
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
}

