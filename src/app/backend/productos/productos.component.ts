import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { InfoProductoDTO } from 'src/app/models/cliente-model/cliente-model.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  InfoProducto: InfoProductoDTO = new InfoProductoDTO();
  invoiceForm: FormGroup;
  constructor(public menuController: MenuController, private fb: FormBuilder, public service: ServiceService) { }

  ngOnInit() {

    this.initializeForm();

  }



  initializeForm(): void {

    this.invoiceForm = this.fb.group({

      productoNombre: ['', Validators.required],
      productoDescripcion: ['', Validators.required],
      productoIva: ['', Validators.required],
      productoPorcentajeDescuento: ['', Validators.required],
      productoValor: ['', Validators.required],


    });

  }
  openMenu() {
    this.menuController.toggle('principal');
  }

  guardarProducto() {

    const payload: InfoProductoDTO = {

      productoDescripcion: this.invoiceForm.get('productoDescripcion').value,

      productoIva: this.invoiceForm.get('productoIva').value,

      productoNombre: this.invoiceForm.get('productoNombre').value,

      productoPorcentajeDescuento: this.invoiceForm.get('productoPorcentajeDescuento').value,

      productoValor: this.invoiceForm.get('productoValor').value,

      categoria: { categoriaId: '1' }

    }

    console.log(payload);



    this.service.crearProducto(payload).subscribe(

      (resp) => {

        console.log('resp: ', resp);

      },

      (err) => {

        console.log('err: ', err);

      },

      () => {

        console.log('completado');

      }

    );

    this.initializeForm();

  }
}
