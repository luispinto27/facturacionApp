import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetClientesComponent } from './set-clientes/set-clientes.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { VendedorComponent } from './vendedor/vendedor.component';


@NgModule({
  declarations: [
    SetClientesComponent,
    VendedorComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class BackendModule { }
