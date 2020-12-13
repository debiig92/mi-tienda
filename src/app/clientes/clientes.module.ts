import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ListaComponent } from './lista/lista.component';
import { AgregarComponent } from './agregar/agregar.component';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MostrarComponent } from './mostrar/mostrar.component';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [ListaComponent, AgregarComponent, MostrarComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule
  ]
})
export class ClientesModule { }
