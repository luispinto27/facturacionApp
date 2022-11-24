import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ConsultarfacturaComponent } from './backend/consultarfactura/consultarfactura.component';
import { SetClientesComponent } from './backend/set-clientes/set-clientes.component';
import { SetFacturasComponent } from './backend/set-facturas/set-facturas.component';
import { HomeComponent } from './pages/home/home.component';
import { VendedorComponent } from './backend/vendedor/vendedor.component';
import { ProductosComponent } from './backend/productos/productos.component';
import { FacturaComponent } from './backend/factura/factura.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'set-clientes', component: SetClientesComponent },
  { path: 'set-facturas', component: SetFacturasComponent },
  { path: 'consultarfactura', component: ConsultarfacturaComponent },
  { path: 'vendedor', component: VendedorComponent},
  { path: 'productos', component: ProductosComponent },
  { path: 'factura', component: FacturaComponent },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
