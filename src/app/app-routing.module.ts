import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PedidoComponent } from './pedido/pedido.component';
import { VerPedidoComponent } from "./ver-pedido/ver-pedido.component";
import { HacerPedidoComponent } from './hacer-pedido/hacer-pedido.component';
import { FormularioComponent } from './auth/formulario/formulario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { RecuperarContrasenaComponent } from './auth/recuperar-contrasena/recuperar-contrasena.component';

import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { AdminDulcesComponent } from './admin-dulces/admin-dulces.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminEspecialesComponent } from './admin-especiales/admin-especiales.component';
import { AdminFrutasComponent } from './admin-frutas/admin-frutas.component';
import { AdminToppingsComponent } from './admin-toppings/admin-toppings.component';
import { AdminSalsasComponent } from './admin-salsas/admin-salsas.component';
import { AdminLicoresComponent } from './admin-licores/admin-licores.component';

const routes: Routes = [
  { path: '', component: FormularioComponent },
  { path: 'home', component: HomeComponent },
  { path: 'hacer-pedido', component: HacerPedidoComponent },
  { path: 'ver-pedido', component: VerPedidoComponent },
  { path: 'crear-usuario', component: CrearUsuarioComponent},
  { path: 'pedido', component: PedidoComponent },
  { path: 'recuperar-contrasena', component: RecuperarContrasenaComponent },
  {path: 'crear-usuario', component: CrearUsuarioComponent},
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'admin', component: AdminHomeComponent },
  { path: 'admin/dulces', component: AdminDulcesComponent },
  { path: 'admin/especiales', component: AdminEspecialesComponent },
  { path: 'admin/frutas', component: AdminFrutasComponent },
  { path: 'admin/toppings', component: AdminToppingsComponent },
  { path: 'admin/salsas', component: AdminSalsasComponent },
  { path: 'admin/licores', component: AdminLicoresComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
