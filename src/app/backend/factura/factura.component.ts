import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { InfoFacturaDTO } from 'src/app/models/models/models.module';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss'],
})
export class FacturaComponent implements OnInit {
  infoFactura: InfoFacturaDTO = new InfoFacturaDTO();
  invoiceForm: FormGroup;
  facturaDetalles: any[] = [];

  constructor(
    public menuController: MenuController,
    public service: ServiceService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  addProduct(): void {
    this.facturaDetalles.push({
      facturaDetalleCantidad: this.invoiceForm.get('cantidad').value,
      facturaDetalleSubDescuento: this.invoiceForm.get('descuento').value,
      facturaDetalleSubTotal: this.invoiceForm.get('precio').value,
      producto: { productoId: this.invoiceForm.get('producto').value, }
    });

    this.invoiceForm.get('producto').setValue('');
    this.invoiceForm.get('cantidad').setValue('');
    this.invoiceForm.get('descuento').setValue('');
    this.invoiceForm.get('precio').setValue('');

    console.log('facturaDetalles', this.facturaDetalles);
    this.totalingInvoice();
  }

  initializeForm(): void {
    this.invoiceForm = this.fb.group({
      facturaNumero: ['', Validators.required],
      facturaVendedor: ['', Validators.required],
      facturaCliente: ['', Validators.required],
      producto: ['', Validators.required],
      cantidad: ['', Validators.required],
      descuento: ['', Validators.required],
      precio: ['', Validators.required],
      facturaTotal: ['', Validators.required],
      facturaNeto: ['', Validators.required],
      facturaTotalDescuento: ['', Validators.required],
    });
  }

  //Calcular la factura
  totalingInvoice(): void {
    let total = 0;
    let facturaNeto = 0;
    let facturaTotalDescuento = 0;

    this.facturaDetalles.forEach((item) => {
      total += item.facturaDetalleSubTotal * item.facturaDetalleCantidad;
      facturaTotalDescuento +=
        item.facturaDetalleSubDescuento * item.facturaDetalleCantidad;
      facturaNeto += ((item.facturaDetalleSubTotal * item.facturaDetalleCantidad));

    });

    facturaNeto = facturaNeto - facturaTotalDescuento;

    this.invoiceForm.get('facturaTotal').setValue(total);
    this.invoiceForm.get('facturaNeto').setValue(facturaNeto);
    this.invoiceForm
      .get('facturaTotalDescuento')
      .setValue(facturaTotalDescuento);
  }

  openMenu() {
    this.menuController.toggle('principal');
  }

  guardarFactura() {
    const payload: InfoFacturaDTO = {
      facturaTotal: this.invoiceForm.get('facturaTotal').value,
      facturaFecha: new Date(),
      facturaObservacion: 'Sin Observaciones',
      cliente: {
        id: this.invoiceForm.get('facturaCliente').value,
      },
      vendedor: {
        id: this.invoiceForm.get('facturaVendedor').value,
      },
      facturaDetalles: this.facturaDetalles
    };
    console.log(payload);

    this.service.crearFactura(payload).subscribe(
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

    this.facturaDetalles = [];
    this.initializeForm();
  }
}
