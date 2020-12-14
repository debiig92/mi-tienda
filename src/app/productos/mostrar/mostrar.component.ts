import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  productoSeleccionado:any = [];
  constructor(private productosService:ProductosService,private router: Router) { }

  ngOnInit(): void {
    this.productoSeleccionado = this.productosService.productoSeleccionado.value;
    console.log(this.productoSeleccionado);

    if(this.productoSeleccionado.length == 0){
      this.router.navigate(['/productos']);
    }
  }

}
