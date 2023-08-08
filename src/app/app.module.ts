import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeladosComponent } from './helados/helados.component';
import { HomeComponent } from './home/home.component';
import { PedidoComponent } from './pedido/pedido.component';
import { HacerPedidoComponent } from './hacer-pedido/hacer-pedido.component';
import { VerPedidoComponent } from './ver-pedido/ver-pedido.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Importa FormsModule



@NgModule({
  declarations: [
    AppComponent,
    HeladosComponent,
    HomeComponent,
    PedidoComponent,
    HacerPedidoComponent,
    VerPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
