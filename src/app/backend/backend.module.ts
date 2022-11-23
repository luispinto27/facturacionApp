import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetClientesComponent } from './set-clientes/set-clientes.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
<<<<<<< Updated upstream
import { VendedorComponent } from './vendedor/vendedor.component';
=======
import { ProductosComponent } from './productos/productos.component';

>>>>>>> Stashed changes


@NgModule({
  declarations: [
<<<<<<< Updated upstream
    SetClientesComponent,
    VendedorComponent
=======
    SetClientesComponent, ProductosComponent
>>>>>>> Stashed changes
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class BackendModule { }
