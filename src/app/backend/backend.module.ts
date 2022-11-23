import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetClientesComponent } from './set-clientes/set-clientes.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VendedorComponent } from './vendedor/vendedor.component';
import { FacturaComponent } from './factura/factura.component';


@NgModule({
  declarations: [
    SetClientesComponent,
    VendedorComponent,
    FacturaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BackendModule { }
