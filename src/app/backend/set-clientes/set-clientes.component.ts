import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { InfoClienteDTO } from 'src/app/models/cliente-model/cliente-model.module';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-set-clientes',
  templateUrl: './set-clientes.component.html',
  styleUrls: ['./set-clientes.component.scss'],
})
export class SetClientesComponent implements OnInit {

  infoCliente: InfoClienteDTO = new InfoClienteDTO();

  constructor(public menuController: MenuController,
              public service: ServiceService) { }

  ngOnInit() {
  }

  openMenu() {
    this.menuController.toggle('principal');
  }

  guardarCliente() {
    console.log(this.infoCliente);
    this.service.crearCliente(this.infoCliente);
  }
}
