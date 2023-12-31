import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './shared/header/header.component';
import { FormularioComponent } from './auth/formulario/formulario.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeladosComponent } from './helados/helados.component';
import { HomeComponent } from './home/home.component';
import { PedidoComponent } from './pedido/pedido.component';
import { HacerPedidoComponent } from './hacer-pedido/hacer-pedido.component';
import { VerPedidoComponent } from './ver-pedido/ver-pedido.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { ReactiveFormsModule } from '@angular/forms';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RecuperarContrasenaComponent } from "./auth/recuperar-contrasena/recuperar-contrasena.component";
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



@NgModule({
  declarations: [
    CrearUsuarioComponent,
    AppComponent,
    HeladosComponent,
    HomeComponent,
    PedidoComponent,
    HacerPedidoComponent,
    VerPedidoComponent,
    HeaderComponent,
    FormularioComponent,
    FooterComponent,
    AdminDulcesComponent,
    IniciarSesionComponent,
    AdminHomeComponent,
    AdminEspecialesComponent,
    AdminFrutasComponent,
    AdminToppingsComponent,
    AdminSalsasComponent,
    AdminLicoresComponent,
    RecuperarContrasenaComponent,

    AdminPedidosComponent,
    AdminUsuariosComponent,
    AdminHeladosComponent,
    CodigoRecuperacionComponent,
    ActualizarContrasenaComponent,
    AdminPedidosV2Component,
    AdminPedidosV3Component,
    ReporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,

    ToastrModule.forRoot(), // ToastrModule added
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
