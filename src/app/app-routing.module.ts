import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './ordenes/agregar/agregar.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), data: { preload: true }},
  {path: 'clientes', loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule)},
  {path: 'productos', loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule)},
  {path: 'ordenes', loadChildren: () => import('./ordenes/ordenes.module').then(m => m.OrdenesModule)},
  {path: 'crear-orden', component: AgregarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
