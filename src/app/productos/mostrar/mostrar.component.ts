import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  productoSeleccionado:any;
  constructor(private productosService:ProductosService) { }

  ngOnInit(): void {
    this.productoSeleccionado = this.productosService.productoSeleccionado.value;
    console.log(this.productoSeleccionado);
  }

}
