import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetClientesComponent } from './set-clientes/set-clientes.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductosComponent } from './productos/productos.component';



@NgModule({
  declarations: [
    SetClientesComponent, ProductosComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BackendModule { }
