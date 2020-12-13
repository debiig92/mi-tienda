import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor(private httpClient: HttpClient) { }

  listaOrdenes() {
    return this.httpClient.get<any>(environment.host + '/ordenes');
  }

  
  public registrarOrdenes(payload: any) {
    return this.httpClient.post<any>(environment.host + '/ordenes', payload, {observe: 'response'});
  }
  
}
