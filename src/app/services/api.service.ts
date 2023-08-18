import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8000/api'; // Cambia la URL según tu configuración de backend

  constructor(private http: HttpClient) { }

  getHelados(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/helados`);
  }
  getDulces(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/dulces`);
  }

  getEspeciales(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/especiales`);
  }

  getFrutas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/frutas`);
  }

  getSalsas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/salsas`);
  }

  getTopings(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/topings`);
  }

  getLicores(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/licores`);
  }

  hacerPedido(pedidoData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/pedidos`, pedidoData);
  }

  // crearPedido(pedidoData: any) {
  //   return this.http.post(`${this.apiUrl}/pedidos`, pedidoData);
  // }

  crearDulcePedido(dulceId: number, pedidoId: number) {
    const data = {
      dulce_id: dulceId,
      pedido_id: pedidoId
    };
    return this.http.post(`${this.apiUrl}/dulce-pedido`, data);
  }

  crearEspecialPedido(especialId: number, pedidoId: number) {
    const data = {
      especial_id: especialId,
      pedido_id: pedidoId
    };
    return this.http.post(`${this.apiUrl}/especial-pedido`, data);
  }

  crearFrutaPedido(frutaId: number, pedidoId: number) {
    const data = {
      fruta_id: frutaId,
      pedido_id: pedidoId
    };
    return this.http.post(`${this.apiUrl}/fruta-pedido`, data);
  }

  crearLicorPedido(licorId: number, pedidoId: number) {
    const data = {
      licor_id: licorId,
      pedido_id: pedidoId
    };
    return this.http.post(`${this.apiUrl}/licor-pedido`, data);
  }

  crearSalsaPedido(salsaId: number, pedidoId: number) {
    const data = {
      salsa_id: salsaId,
      pedido_id: pedidoId
    };
    return this.http.post(`${this.apiUrl}/salsa-pedido`, data);
  }

  crearTopingPedido(topingId: number, pedidoId: number) {
    const data = {
      toping_id: topingId,
      pedido_id: pedidoId
    };
    return this.http.post(`${this.apiUrl}/toping-pedido`, data);
  }



}
