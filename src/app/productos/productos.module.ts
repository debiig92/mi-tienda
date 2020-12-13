import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos-routing.module';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { AgregarComponent } from './agregar/agregar.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [ListaComponent, AgregarComponent, MostrarComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule
  ]
})
export class ProductosModule { }
