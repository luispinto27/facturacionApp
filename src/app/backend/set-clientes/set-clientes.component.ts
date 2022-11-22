import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MenuController, ToastController } from '@ionic/angular';
import { EstadoClienteDTO, InfoClienteDTO, InfoResponseClienteDTO } from 'src/app/models/models/models.module';

import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-set-clientes',
  templateUrl: './set-clientes.component.html',
  styleUrls: ['./set-clientes.component.scss'],
})
export class SetClientesComponent implements OnInit {

  infoCliente: InfoClienteDTO = new InfoClienteDTO();
  responseCrearCliente: InfoResponseClienteDTO;
  noCambia: boolean = false;
  cambioEstado: EstadoClienteDTO = new EstadoClienteDTO();
  listClientes: InfoClienteDTO[] = [];

  constructor(public menuController: MenuController,
              public service: ServiceService,
              private toastController: ToastController) { }

  ngOnInit() {
  }

  openMenu() {
    this.menuController.toggle('principal');
  }

  guardarCliente(formulario: NgForm) {
    console.log(this.infoCliente);
    this.service.crearCliente(this.infoCliente).subscribe((response) => {
      this.responseCrearCliente = response;
      console.log(this.responseCrearCliente);
        if(this.responseCrearCliente.codigo === 1){
          this.presentToast("Cliente Registrado Correctamente!!!");
          this.limpiarCampos();
      }
    });
    }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      cssClass: 'custom-toast',
      buttons: [
        {
          text: 'Dismiss',
          role: 'cancel'
        }
      ],
    });

    await toast.present();
  }

  limpiarCampos() {
    this.infoCliente.clienteApellidos = '';
    this.infoCliente.clienteCorreoElectronico = '';
    this.infoCliente.clienteFechaNacimiento = new Date();
    this.infoCliente.clienteNombres = '';
    this.infoCliente.clienteNumeroIdentificacion = 0;
    this.infoCliente.clienteTelefono = '';
  }

  cambiarEstadoCliente(){
    this.cambioEstado.id = this.infoCliente.id;
    this.service.actualizarEstadoCliente(this.cambioEstado).subscribe(response => {
        if (response.codigo == 1) {
          this.presentToast('Cliente actualizado');
          this.limpiarCampos();
        }
    });
  }

  async  mostrarDatos(){
    this.service.getAllClientes().subscribe(response => {
        this.listClientes = response.data;
    });
  }

  seleccionarCliente(datos: InfoClienteDTO) {
    this.infoCliente.id = datos.id;
    this.infoCliente.clienteNombres = datos.clienteNombres;
    this.infoCliente.clienteApellidos = datos.clienteApellidos;
    this.infoCliente.clienteNumeroIdentificacion = datos.clienteNumeroIdentificacion;
    this.infoCliente.clienteTelefono = datos.clienteTelefono;
    this.infoCliente.clienteCorreoElectronico = datos.clienteCorreoElectronico;
    this.infoCliente.clienteFechaNacimiento = datos.clienteFechaNacimiento;
    this.infoCliente.clienteGenero = datos.clienteGenero;
    this.cambioEstado.clienteEstado = datos.estado;
    this.noCambia = true;
  }

  eliminarCliente(element: InfoClienteDTO){
    let index = this.listClientes.findIndex(v => v.clienteNumeroIdentificacion == element.clienteNumeroIdentificacion);
    this.listClientes.splice(index, 1);
    this.presentToast('Cliente Eliminado');
  }
}
