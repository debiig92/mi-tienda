import { Component, OnInit } from '@angular/core';
import { OrdenesService } from '../servicios/ordenes.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'idProducto', 'idCliente', 'cantidad', 'fecha'];
  dataSource: any[] = [];
  constructor(private ordenesService:OrdenesService) {}

  ngOnInit(): void {

    this.ordenesService.listaOrdenes().subscribe((data: any) => {
      console.log(data);

      this.dataSource = data;
    }, err => {
     
    });

  }

}
