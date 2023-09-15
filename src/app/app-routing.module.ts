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
import { AdminPedidosV2Component } from './admin-pedidos-v2/admin-pedidos-v2.component';
import { AdminPedidosV3Component } from './admin-pedidos-v3/admin-pedidos-v3.component';
import { ReporteComponent } from './reporte/reporte.component';



const routes: Routes = [
  { path: '', component: FormularioComponent },
  { path: 'home', component: HomeComponent },
  { path: 'hacer-pedido', component: HacerPedidoComponent },
  { path: 'ver-pedido', component: VerPedidoComponent },
  { path: 'reporte', component: ReporteComponent },
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
  { path: 'admin/pedidosV1', component: AdminPedidosComponent },
  { path: 'admin/usuarios', component: AdminUsuariosComponent },
  { path: 'admin/helados', component: AdminHeladosComponent },
  { path: 'admin/pedidos', component: AdminPedidosV2Component },
  { path: 'admin/pedidos/pedidoUser', component: AdminPedidosV3Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
