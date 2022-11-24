import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetClientesComponent } from './set-clientes/set-clientes.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SetFacturasComponent } from './set-facturas/set-facturas.component';
import { ConsultarfacturaComponent } from './consultarfactura/consultarfactura.component';
import { ProductosComponent } from './productos/productos.component';
import { VendedorComponent } from './vendedor/vendedor.component';

@NgModule({
  declarations: [
    SetClientesComponent,
    SetFacturasComponent,
    ConsultarfacturaComponent,
    ProductosComponent,
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
