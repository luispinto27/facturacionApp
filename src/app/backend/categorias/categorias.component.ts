import { Component,  OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
import { InfoCategoriaDTO } from '../../models/models/models.module';
import { ServiceService } from '../../services/service.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {

  noCambia = false;

  //listCategoria: InfoCategoriaDTO[] = [];
  infoCategoria: InfoCategoriaDTO = new InfoCategoriaDTO();

  constructor(public menuController: MenuController,
    private service: ServiceService,
    private toastController: ToastController) { }

  ngOnInit() {}

  async guardarCategoria(formulario: NgForm): Promise<void>{

    this.service.crearCategoria(this.infoCategoria).subscribe(async datos => {
      // eslint-disable-next-line eqeqeq
      if (datos.codigo == 1) {
        this.mostrarNotificaciones('Categoria Guardado Correctamente');
        this.limpiarFiltros();
      } else {
        this.mostrarNotificaciones('Error al guardar el registro');
      }
    });
  }

  openMenu() {
    this.menuController.toggle('principal');
  }

/*
  seleccionaProducto(datos: InfoCategoriaDTO) {
    this.infoCategoria.categoriaId = datos.categoriaId;
    this.infoCategoria.categoriaCodigo = datos.categoriaCodigo;
    this.infoCategoria.categoriaDescripcion = datos.categoriaDescripcion;
    this.infoCategoria.categoriaEstado = datos.categoriaEstado;
    this.infoCategoria.categoriaFechaCreacion = datos.categoriaFechaCreacion;
    this.infoCategoria.categoriaFechaModificacion = datos.categoriaFechaModificacion;
  }*/

  async limpiarFiltros(){
   // this.infoCategoria.categoriaId = '';
    this.infoCategoria.categoriaCodigo = '';
    this.infoCategoria.categoriaDescripcion = '';
    //this.infoCategoria.categoriaEstado = true;
   // this.infoCategoria.categoriaFechaCreacion = new Date();
   // this.infoCategoria.categoriaFechaModificacion = new Date();
  }

  async mostrarNotificaciones(message: string){
    const toast = await this.toastController.create({
        message,
        duration: 1500,
        position: 'top'
    });
    await toast.present();
  }

}
