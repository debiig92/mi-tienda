import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  
  public clienteSeleccionado = new BehaviorSubject<any>([]);

  constructor(private httpClient: HttpClient) { }

  listaClientes() {
    return this.httpClient.get<any>(environment.host + '/clientes');
  }

  getClienteById(id:any) {
    return this.httpClient.get<any>(environment.host + '/clientes/'+id);
  }

  public registrarCliente(payload: any) {
    return this.httpClient.post<any>(environment.host + '/clientes', payload, {observe: 'response'});
  }
}
