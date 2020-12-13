import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    nombre: new FormControl(null, {
      validators: [Validators.required]
    }),
    descripcion: new FormControl(null, {
      validators: [Validators.required] 
    }),
    precio: new FormControl(null, {
      validators: [Validators.required ] 
    })
  });

  showProgressBar = false;
  showSuccess = false;
  showError = false;

  constructor(private productosService:ProductosService) { }

  ngOnInit(): void {
    
  }

  submit() {

    this.showSuccess = false;
    this.showError = false;

    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);

    this.showProgressBar = true;
    this.productosService.registrarProductos(this.loginForm.value).subscribe((data: any) => {
      console.log(data);
      this.showProgressBar = false;
      this.showSuccess = true;
    }, err => {
      this.showProgressBar = false;
      this.showError = false;
    });
  }
}
