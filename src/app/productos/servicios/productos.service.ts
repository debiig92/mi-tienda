import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  public productoSeleccionado = new BehaviorSubject<any>([]);
  constructor(private httpClient: HttpClient) { }

  listaProductos() {
    return this.httpClient.get<any>(environment.host + '/productos');
  }

  
  public registrarProductos(payload: any) {
    return this.httpClient.post<any>(environment.host + '/productos', payload, {observe: 'response'});
  }
}
