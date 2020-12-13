import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../servicios/clientes.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {
 clienteSeleccionado:any;
  constructor(private clientesService:ClientesService) { }

  ngOnInit(): void {

    this.clienteSeleccionado = this.clientesService.clienteSeleccionado.value;
    console.log(this.clienteSeleccionado);

  }

}
