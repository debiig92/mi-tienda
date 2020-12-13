import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/clientes/servicios/clientes.service';
import { ProductosService } from 'src/app/productos/servicios/productos.service';
import { OrdenesService } from '../servicios/ordenes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    idProducto: new FormControl(null, {
      validators: [Validators.required]
    }),
    idCliente: new FormControl(null, {
      validators: [Validators.required] 
    }),
    cantidad: new FormControl(null, {
      validators: [Validators.required] 
    }),
    fecha: new FormControl(null, {
      validators: [Validators.required] 
    })
  });
  showProgressBar = false;
  showSuccess = false;
  showError = false;
  products:any;
  clients:any;

  constructor(private ordenService:OrdenesService
    ,private productosService:ProductosService
    ,private clientesService:ClientesService) { }

  ngOnInit(): void {

    this.productosService.listaProductos().subscribe((data: any) => {
      console.log(data);

      this.products = data;
    }, err => {
     
    });

    this.clientesService.listaClientes().subscribe((data: any) => {
      console.log(data);

      this.clients = data;
    }, err => {
     
    });
    
  }

  submit() {
    this.showSuccess = false;
    this.showError = false;
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
    this.showProgressBar = true;
    
    this.ordenService.registrarOrdenes(this.loginForm.value).subscribe((data: any) => {
      console.log(data);
      this.showProgressBar = false;
      this.showSuccess = true;
    }, err => {
      this.showProgressBar = false;
      this.showError = false;
    });
  }

}
