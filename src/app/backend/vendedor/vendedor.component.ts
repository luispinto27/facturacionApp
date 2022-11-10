import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { InfoVendedorDTO } from '../../models/models/models.module';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.scss'],
})
export class VendedorComponent implements OnInit {

  infoVendedor: InfoVendedorDTO = new InfoVendedorDTO();
  
  constructor(public menuController: MenuController,
              private service: ServiceService) { }

  ngOnInit() {}
  
  guardarVendedor(){
    this.service.crearVendedor(this.infoVendedor);
  }

  openMenu() {
    this.menuController.toggle('principal');
  }
}
