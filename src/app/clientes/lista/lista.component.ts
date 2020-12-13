import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from '../servicios/clientes.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombres', 'apellidos','getdetails'];
  dataSource: any[] = [];
  constructor(private clientesService:ClientesService,private router: Router) {}

  ngOnInit(): void {

    this.clientesService.listaClientes().subscribe((data: any) => {
      console.log(data);

      this.dataSource = data;
    }, err => {
     
    });

  }

  mostrarCliente(cliente:any){
    console.log(cliente);
    this.clientesService.clienteSeleccionado.next(cliente);
    this.router.navigate(['/clientes/mostrar/', cliente.id]);
  }

}
