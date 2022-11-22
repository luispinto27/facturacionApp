import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasComponent } from './categorias/categorias.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { VendedorComponent } from './vendedor/vendedor.component';



@NgModule({
  declarations: [
    CategoriasComponent,
    VendedorComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class BackendModule { }
