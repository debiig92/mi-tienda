import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenesRoutingModule } from './ordenes-routing.module';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [ListaComponent],
  imports: [
    CommonModule,
    OrdenesRoutingModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule
  ]
})
export class OrdenesModule { }
