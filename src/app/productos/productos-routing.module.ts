import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { ListaComponent } from './lista/lista.component';
import { MostrarComponent } from './mostrar/mostrar.component';

const routes: Routes = [
  {path: '', component: ListaComponent, data: { preload: true }},
  {path: 'agregar', component: AgregarComponent},
  {path: 'mostrar/:id', component: MostrarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
