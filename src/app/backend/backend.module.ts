import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasComponent } from './categorias/categorias.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsultarfacturaComponent } from './consultarfactura/consultarfactura.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { FacturaComponent } from './factura/factura.component';
import { SetFacturasComponent } from './set-facturas/set-facturas.component';

@NgModule({
  declarations: [
    CategoriasComponent,
    VendedorComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BackendModule { }
