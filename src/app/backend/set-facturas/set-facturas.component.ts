import { Component, OnInit } from '@angular/core';
import { InfoFacturaDTO } from 'src/app/models/models/models.module';
import { FacturaServiceService } from 'src/app/services/factura-service/factura-service.service';

@Component({
  selector: 'app-set-facturas',
  templateUrl: './set-facturas.component.html',
  styleUrls: ['./set-facturas.component.scss'],
})
export class SetFacturasComponent implements OnInit {

  infoFactura: InfoFacturaDTO = new InfoFacturaDTO();

  constructor(private facturaServiceService: FacturaServiceService) { }

  ngOnInit() {}

  guardaFactura ()  {
    //console.log(this.infoFactura);
    let datosEnvio: {} = {
      facturaTotal: this.infoFactura.facturaTotal,
      facturaFecha: this.infoFactura.facturaFecha,
      facturaObservacion: this.infoFactura.facturaObservacion,
      cliente: {
        id: this.infoFactura.idcliente
      },
      vendedor: {
        id: this.infoFactura.id
      },
      facturaDetalles: [
        {
          facturaDetalleCantidad: this.infoFactura.facturaDetalleCantidad,
          facturaDetalleSubTotal: this.infoFactura.facturaDetalleSubTotal,
          facturaDetalleSubDescuento: this.infoFactura.facturaDetalleSubDescuento,
          producto: {
              productoId: this.infoFactura.productoId
          }
        }
      ]
    };
    //console.log(datosEnvio);
    //console.log(JSON.stringify(datosEnvio));
    this.facturaServiceService.crearFactura(datosEnvio).subscribe(
      async (respuesta: any) => {
        console.log(respuesta);
      },
      (err) => {
        console.log(err.status);
      }
    );
  }

}
