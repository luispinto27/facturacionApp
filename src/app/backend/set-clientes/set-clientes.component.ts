import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { InfoVendedorDTO } from 'src/app/models/cliente-model/cliente-model.module';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-set-clientes',
  templateUrl: './set-clientes.component.html',
  styleUrls: ['./set-clientes.component.scss'],
})
export class SetClientesComponent implements OnInit {

  infoVendedor: InfoVendedorDTO = new InfoVendedorDTO();

  constructor(public menuController: MenuController,
              public service: ServiceService) { }

  ngOnInit() {
  }

  openMenu() {
    this.menuController.toggle('principal');
  }

  guardarCliente() {
    console.log(this.infoVendedor);
    // this.service.crearCliente(this.infoVendedor);
  }
}
