import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VerPedidoComponent } from "./ver-pedido/ver-pedido.component";
import { HacerPedidoComponent } from './hacer-pedido/hacer-pedido.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hacer-pedido', component: HacerPedidoComponent },
  { path: 'ver-pedido', component: VerPedidoComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'crear-usuario', component: CrearUsuarioComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
