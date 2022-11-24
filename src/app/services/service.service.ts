import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, mergeMap, retry } from 'rxjs/operators';
import { from, Observable, throwError } from 'rxjs';
import { InfoProductoDTO } from '../models/cliente-model/cliente-model.module';
import { EstadoClienteDTO, EstadoVendedorDTO,
  InfoClienteDTO,
  InfoDataClientesDTO,
  InfoFacturaDTO,
  InfoResponseClienteDTO,
  InfoResponseVendedorDTO,
  InfoVendedorDTO } from '../models/models/models.module';
import { InforResponseVendedorDTO } from '../models/models/vendedor-out-list';
import { VendedorLogin } from '../models/models/vendedor-login';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private urlServicio = 'http://3.95.62.160:8085/';

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
      `${this.urlServicio}api/cliente/`, data)
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

   public getAllClientes(): Observable<InfoDataClientesDTO>{
    return this.http.get<InfoDataClientesDTO>(`${this.urlServicio}api/cliente/`);
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

   public actualizarEstadoCliente(data: EstadoClienteDTO): Observable<InfoResponseClienteDTO> {
    return this.http
    .put<InfoResponseClienteDTO>(
      `${this.urlServicio}api/cliente`, data)
    .pipe(
      retry(0),
      catchError(this.handleError),
      map((response) => response)

    );
   }
   public crearProducto(data: InfoProductoDTO) {

    return this.http.post(`${this.urlServicio}api/producto`, data).pipe(

      map((resp: any) => {

        console.log('Resp: ', resp);

        return resp;

      })

    );

  }

  public crearFactura(data: InfoFacturaDTO) {
    return this.http.post(`${this.urlServicio}api/factura`, data).pipe(
      map((resp: any) => {
        console.log('Resp: ', resp);
        return resp;
      })
    );
  }

}
