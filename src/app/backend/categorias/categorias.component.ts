import { Component,  OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
import { InfoCategoriaDTO } from '../../models/models/models.module';
import { ServiceService } from '../../services/service.service';
import { NgForm } from '@angular/forms';
import { element } from 'protractor';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {

  listCategoria: InfoCategoriaDTO[] = [];
  infoCategoria: InfoCategoriaDTO = new InfoCategoriaDTO();
  
  constructor(public menuController: MenuController,
    private service: ServiceService,
    private toastController: ToastController) { }

  ngOnInit() {}

  guardarCategoria(formulario: NgForm){
    // this.service.crearCategoria(this.infoCategoria);
    this.listCategoria.push({
      categoriaId: this.infoCategoria.categoriaId,
      categoriaCodigo: this.infoCategoria.categoriaCodigo,
      categoriaDescripcion: this.infoCategoria.categoriaDescripcion,
      categoriaEstado: this.infoCategoria.categoriaEstado,
      categoriaFechaCreacion: this.infoCategoria.categoriaFechaCreacion,
      categoriaFechaModificacion: this.infoCategoria.categoriaFechaModificacion
    });
    this.limpiarFiltros();
    this.mostrarNotificaciones('Categoria Guardado Correctamente');
  }

  openMenu() {
    this.menuController.toggle('principal');
  }
  
  seleccionaProducto(datos: InfoCategoriaDTO) {
    this.infoCategoria.categoriaId = datos.categoriaId;
    this.infoCategoria.categoriaCodigo = datos.categoriaCodigo;
    this.infoCategoria.categoriaDescripcion = datos.categoriaDescripcion;
    this.infoCategoria.categoriaEstado = datos.categoriaEstado;
    this.infoCategoria.categoriaFechaCreacion = datos.categoriaFechaCreacion;
    this.infoCategoria.categoriaFechaModificacion = datos.categoriaFechaModificacion;
  }

  async limpiarFiltros(){
    this.infoCategoria.categoriaId = '';
    this.infoCategoria.categoriaCodigo = '';
    this.infoCategoria.categoriaDescripcion = '';
    this.infoCategoria.categoriaEstado = true;
    this.infoCategoria.categoriaFechaCreacion = new Date();
    this.infoCategoria.categoriaFechaModificacion = new Date();
  }

  async mostrarNotificaciones(message: string){
    const toast = await this.toastController.create({
        message: message,
        duration: 1500,
        position: 'top'
    });
    await toast.present();
  }

}
