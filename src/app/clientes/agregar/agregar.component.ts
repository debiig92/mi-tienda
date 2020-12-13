import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from '../servicios/clientes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    nombres: new FormControl(null, {
      validators: [Validators.required]
    }),
    apellidos: new FormControl(null, {
      validators: [Validators.required] 
    })
  });

  showProgressBar = false;
  showSuccess = false;
  showError = false;
  constructor(private clientesService:ClientesService) { }

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
    this.clientesService.registrarCliente(this.loginForm.value).subscribe((data: any) => {
      console.log(data);
      this.showProgressBar = false;
      this.showSuccess = true;
    }, err => {
      this.showProgressBar = false;
      this.showError = false;
    });
  }
}
