import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenesRoutingModule } from './ordenes-routing.module';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [ListaComponent],
  imports: [
    CommonModule,
    OrdenesRoutingModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OrdenesModule { }
