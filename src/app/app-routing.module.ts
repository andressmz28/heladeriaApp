import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PedidoComponent } from './pedido/pedido.component';
import { VerPedidoComponent } from "./ver-pedido/ver-pedido.component";
import { HacerPedidoComponent } from './hacer-pedido/hacer-pedido.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hacer-pedido', component: HacerPedidoComponent },
  { path: 'ver-pedido', component: VerPedidoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
