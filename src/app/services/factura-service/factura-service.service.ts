import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoFacturaDTO } from 'src/app/models/models/models.module';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  private urlServicio: string =  environment.urlFactura;

  constructor(private http: HttpClient) {
  }

  private ejecutarServicioCrearFactura(resource: string, datos: {}) {
    let url: string = this.urlServicio + resource;
    return this.http.post(url, datos);
  }

  crearFactura(datos: {}) {
    return this.ejecutarServicioCrearFactura('/api/facturaFilter/', datos);
  }

  consultarFactura(datos: {}) {
    return this.ejecutarServicioCrearFactura('/api/facturaFilter/', datos);
  }
}
