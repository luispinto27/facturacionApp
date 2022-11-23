import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetClientesComponent } from './set-clientes/set-clientes.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SetFacturasComponent } from './set-facturas/set-facturas.component';



@NgModule({
  declarations: [
    SetClientesComponent,
    SetFacturasComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class BackendModule { }
