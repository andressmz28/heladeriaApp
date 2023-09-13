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
import { AdminPedidosComponent } from './admin-pedidos/admin-pedidos.component';
import { AdminUsuariosComponent } from './admin-usuarios/admin-usuarios.component';
import { AdminHeladosComponent } from './admin-helados/admin-helados.component';
import { CodigoRecuperacionComponent } from './codigo-recuperacion/codigo-recuperacion.component';
import { ActualizarContrasenaComponent } from './actualizar-contrasena/actualizar-contrasena.component';



const routes: Routes = [
  { path: '', component: FormularioComponent },
  { path: 'home', component: HomeComponent },
  { path: 'hacer-pedido', component: HacerPedidoComponent },
  { path: 'ver-pedido', component: VerPedidoComponent },
  { path: 'crear-usuario', component: CrearUsuarioComponent},
  { path: 'pedido', component: PedidoComponent },
  { path: 'recuperar-contrasena', component: RecuperarContrasenaComponent },
  { path: 'api/obtener-codigo-recuperacion', component:CodigoRecuperacionComponent  },
  { path: 'codigo-recuperacion', component: CodigoRecuperacionComponent },
  { path: 'actualizar-contrasena', component: ActualizarContrasenaComponent },
  {path: 'crear-usuario', component: CrearUsuarioComponent},
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'admin', component: AdminHomeComponent },
  { path: 'admin/dulces', component: AdminDulcesComponent },
  { path: 'admin/especiales', component: AdminEspecialesComponent },
  { path: 'admin/frutas', component: AdminFrutasComponent },
  { path: 'admin/toppings', component: AdminToppingsComponent },
  { path: 'admin/salsas', component: AdminSalsasComponent },
  { path: 'admin/licores', component: AdminLicoresComponent },
  { path: 'admin/pedidos', component: AdminPedidosComponent },
  { path: 'admin/usuarios', component: AdminUsuariosComponent },
  { path: 'admin/helados', component: AdminHeladosComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
