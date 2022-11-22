import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, mergeMap, retry } from 'rxjs/operators';
import { from, Observable, throwError } from 'rxjs';
import { EstadoVendedorDTO, InfoClienteDTO, InfoResponseClienteDTO, InfoResponseVendedorDTO, InfoVendedorDTO } from '../models/models/models.module';
import { InforResponseVendedorDTO } from '../models/models/vendedor-out-list';
import { VendedorLogin } from '../models/models/vendedor-login';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private urlServicio = 'http://54.89.170.37:8085/';

  constructor( private http: HttpClient) {
    this.handleError = this.handleError.bind(this);
   }

   public handleError(error) {
    console.error(error);
    return throwError(error);
  }

  public crearCliente(data: InfoClienteDTO): Observable<InfoResponseClienteDTO> {
    return this.http
    .post<InfoResponseClienteDTO>(
      `${this.urlServicio}api/cliente`, data)
    .pipe(
      retry(0),
      catchError(this.handleError),
      map((response) => response)

    );
   }

   public crearVendedor(data: InfoVendedorDTO): Observable<InfoResponseVendedorDTO> {
    return this.http
    .post<InfoResponseVendedorDTO>(
      `${this.urlServicio}api/vendedor/`, data)
    .pipe(
      retry(0),
      catchError(this.handleError),
      map((response) => response)

    );
   }

   public getAllVendedores(): Observable<InforResponseVendedorDTO>{
    return this.http.get<InforResponseVendedorDTO>(`${this.urlServicio}api/vendedor/`);
   }

   
   public crearLoginVendedor(data: VendedorLogin): Observable<InfoResponseVendedorDTO> {
    return this.http
    .post<InfoResponseVendedorDTO>(
      `${this.urlServicio}api/vendedor/login`, data)
    .pipe(
      retry(0),
      catchError(this.handleError),
      map((response) => response)

    );
   }

   public actualizarEstado(data: EstadoVendedorDTO): Observable<InfoResponseVendedorDTO> {
    return this.http
    .put<InfoResponseVendedorDTO>(
      `${this.urlServicio}api/vendedor`, data)
    .pipe(
      retry(0),
      catchError(this.handleError),
      map((response) => response)

    );
   }

}
