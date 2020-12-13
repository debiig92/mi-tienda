import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'precio','getdetails'];
  dataSource: any[] = [];
  constructor(private productosService:ProductosService,private router: Router) {}

  ngOnInit(): void {

    this.productosService.listaProductos().subscribe((data: any) => {
      console.log(data);

      this.dataSource = data;
    }, err => {
     
    });

  }

  
  mostrarProductos(producto:any){
    console.log(producto);
    this.productosService.productoSeleccionado.next(producto);
    this.router.navigate(['/productos/mostrar/', producto.id]);
  }

}
