import { Component, OnInit } from '@angular/core';
import { InfoFacturaDTO } from 'src/app/models/factura-model/factura-model.module';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss'],
})
export class FacturaComponent implements OnInit {

  infoFactura: InfoFacturaDTO = new InfoFacturaDTO();

  constructor() { }

  ngOnInit() {}


  guardarFactura() {
    console.log(this.infoFactura);
    
    
  }



}
