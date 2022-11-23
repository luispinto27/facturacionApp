import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoFacturaDTO } from 'src/app/models/models/models.module';
import { environment } from 'src/environments/environment';
import { catchError, map, mergeMap, retry } from 'rxjs/operators';
import { from, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  private urlServicio: string =  environment.urlFactura;

  constructor(private http: HttpClient) {
    this.handleError = this.handleError.bind(this);
  }

  public handleError(error) {
    console.error(error);
    return throwError(error);
  }

  private ejecutarServicioCrearFactura(resource: string, datos: {}) {
    let url: string = this.urlServicio + resource;
    return this.http.post(url, datos);
  }

  private ejecutarServicioConsultarFactura(resource: string, datos: {}) {
    let url: string = this.urlServicio + resource + datos;
    return this.http.get(url);
  }

  crearFactura(datos: {}) {
    return this.ejecutarServicioCrearFactura('/api/facturaFilter/', datos);
  }

  consultarFactura(datos: {}) {
    return this.ejecutarServicioCrearFactura('/api/facturaFilter/', datos);
  }
}
