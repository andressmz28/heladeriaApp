import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

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




  registerDulce(form: any){
    console.log(form)
    return this.http.post<any[]>(`${this.apiUrl}/api/dulces/create`,
      form,
    );
  }

  borrarDulce(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/api/dulces/${id}`);
  }

  actualizarDulce(id: number, formData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/api/dulces/update/${id}`, formData);
  }

  registerEspecial(form: any){
    console.log(form)
    return this.http.post<any[]>(`${this.apiUrl}/api/especiales/create`,
      form,
    );
  }

  borrarEspecial(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/api/especiales/${id}`);
  }

  actualizarEspecial(id: number, formData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/api/especiales/update/${id}`, formData);
  }

  registerFruta(form: any){
    console.log(form)
    return this.http.post<any[]>(`${this.apiUrl}/api/frutas/create`,
      form,
    );
  }

  borrarFruta(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/api/frutas/${id}`);
  }

  actualizarFruta(id: number, formData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/api/frutas/update/${id}`, formData);
  }

  registerTopping(form: any){
    console.log(form)
    return this.http.post<any[]>(`${this.apiUrl}/api/topings/create`,
      form,
    );
  }

  borrarTopping(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/api/topings/${id}`);
  }

  actualizarTopping(id: number, formData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/api/topings/update/${id}`, formData);
  }

  registerSalsa(form: any){
    console.log(form)
    return this.http.post<any[]>(`${this.apiUrl}/api/salsas/create`,
      form,
    );
  }

  borrarSalsa(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/api/salsas/${id}`);
  }

  actualizarSalsa(id: number, formData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/api/salsas/update/${id}`, formData);
  }

  registerLicor(form: any){
    console.log(form)
    return this.http.post<any[]>(`${this.apiUrl}/api/licores/create`,
      form,
    );
  }

  borrarLicor(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/api/licores/${id}`);
  }

  actualizarLicor(id: number, formData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/api/licores/update/${id}`, formData);
  }


  getCantidadDulces(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/api/dulces/cantidad`);
  }

  getCantidadEspeciales(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/api/especiales/cantidad`);
  }

  getCantidadHelados(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/api/helados/cantidad`);
  }

  getCantidadLicores(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/api/licores/cantidad`);
  }

  getCantidadSalsas(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/api/salsas/cantidad`);
  }

  getCantidadFrutas(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/api/frutas/cantidad`);
  }

  getCantidadTopings(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/api/topings/cantidad`);
  }

  getCantidadPedidosNoAtendidos(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/api/pedidos/cantidadNoAtendido`);
  }

  pedidosUsuarioCliente(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/pedidos/pedidosUsuario/${userId}`);
  }

  pedidosUsuariosAdmin(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/pedidos/pedidosUsuariosAdmin`);
  }

  obtenerNombresDulcesPorPedido(pedidoId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/dulcesPedido/obtenerNombresDulcesPorPedido/${pedidoId}`);
  }

  obtenerNombresFrutasPorPedido(pedidoId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/frutasPedido/nombres/${pedidoId}`);
  }

  obtenerNombresEspecialesPorPedido(pedidoId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/especialesPedido/nombres/${pedidoId}`);
  }

  obtenerNombresLicoresPorPedido(pedidoId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/licoresPedido/nombres/${pedidoId}`);
  }

  obtenerNombresSalsasPorPedido(pedidoId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/salsasPedido/nombres/${pedidoId}`);
  }

  obtenerNombresTopingsPorPedido(pedidoId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/topingsPedido/nombres/${pedidoId}`);
  }

  marcarComoAtendido(pedidoId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/api/pedidos/${pedidoId}/marcar-atendido`, {});
  }

  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/usuarios`);
  }

  borrarUsuario(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/api/usuarios/${id}`);
  }

  registerUsuario(form: any){
    console.log(form)
    return this.http.post<any[]>(`${this.apiUrl}/api/usuarios/create`,
      form,
    );
  }

  actualizarUsuario(id: number, formData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/api/usuarios/update/${id}`, formData);
  }


  borrarHelado(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/api/helados/${id}`);
  }

  actualizarHelado(id: number, formData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/api/helados/update/${id}`, formData);
  }

  registerHelado(form: any){
    console.log(form)
    return this.http.post<any[]>(`${this.apiUrl}/api/helados/create`,
      form,
    );
  }
  
}
