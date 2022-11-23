import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/services/factura-service/factura-service.service';

@Component({
  selector: 'app-consultarfactura',
  templateUrl: './consultarfactura.component.html',
  styleUrls: ['./consultarfactura.component.scss'],
})
export class ConsultarfacturaComponent implements OnInit {
  fechaDesde: Date = null;
  fechaHasta: Date = null;
  listado: [] = null;

  constructor(private facturaService: FacturaService) { }

  ngOnInit() { }

  consultarFactura ()  {    
    console.log(this.fechaDesde);
    console.log(this.fechaHasta);
    let datosEnvio: {} = {
      fechaDesde: this.fechaDesde,
      fechaHasta: this.fechaHasta,
    };
    this.facturaService.consultarFactura(datosEnvio).subscribe(
      async (respuesta: any) => {
        this.listado = respuesta.data;
      },
      (err) => {
        console.log(err.status);
      }
    );
  }

  Limpiar () {
    this.fechaDesde = null;
    this.fechaHasta = null;
    this.listado = null;
  }
 

}
