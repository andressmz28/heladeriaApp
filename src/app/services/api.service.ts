import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private usuario: any; // Variable para almacenar el usuario autenticado

  private apiUrl = 'http://localhost:8000/api'; // Cambia la URL según tu configuración de backend

  constructor(private http: HttpClient, private router: Router) { }

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
    return this.http.post<any[]>(`${this.apiUrl}/dulces/create`,
      form,
    );
  }

  borrarDulce(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/dulces/${id}`);
  }

  actualizarDulce(id: number, formData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/dulces/update/${id}`, formData);
  }

  registerEspecial(form: any){
    console.log(form)
    return this.http.post<any[]>(`${this.apiUrl}/especiales/create`,
      form,
    );
  }

  borrarEspecial(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/especiales/${id}`);
  }

  actualizarEspecial(id: number, formData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/especiales/update/${id}`, formData);
  }

  registerFruta(form: any){
    console.log(form)
    return this.http.post<any[]>(`${this.apiUrl}/frutas/create`,
      form,
    );
  }

  borrarFruta(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/frutas/${id}`);
  }

  actualizarFruta(id: number, formData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/frutas/update/${id}`, formData);
  }

  registerTopping(form: any){
    console.log(form)
    return this.http.post<any[]>(`${this.apiUrl}/topings/create`,
      form,
    );
  }

  borrarTopping(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/topings/${id}`);
  }

  actualizarTopping(id: number, formData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/topings/update/${id}`, formData);
  }

  registerSalsa(form: any){
    console.log(form)
    return this.http.post<any[]>(`${this.apiUrl}/salsas/create`,
      form,
    );
  }

  borrarSalsa(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/salsas/${id}`);
  }

  actualizarSalsa(id: number, formData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/salsas/update/${id}`, formData);
  }

  registerLicor(form: any){
    console.log(form)
    return this.http.post<any[]>(`${this.apiUrl}/licores/create`,
      form,
    );
  }

  borrarLicor(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/licores/${id}`);
  }

  actualizarLicor(id: number, formData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/licores/update/${id}`, formData);
  }


  getCantidadDulces(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/dulces/cantidad`);
  }

  getCantidadEspeciales(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/especiales/cantidad`);
  }

  getCantidadHelados(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/helados/cantidad`);
  }

  getCantidadLicores(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/licores/cantidad`);
  }

  getCantidadSalsas(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/salsas/cantidad`);
  }

  getCantidadFrutas(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/frutas/cantidad`);
  }

  getCantidadTopings(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/topings/cantidad`);
  }

  getCantidadPedidosNoAtendidos(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/pedidos/cantidadNoAtendido`);
  }

  pedidosUsuarioCliente(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/pedidos/pedidosUsuario/${userId}`);
  }

  pedidosUsuariosAdmin(): Observable<any> {
    return this.http.get(`${this.apiUrl}/pedidos/pedidosUsuariosAdmin`);
  }

  obtenerNombresDulcesPorPedido(pedidoId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/dulcesPedido/obtenerNombresDulcesPorPedido/${pedidoId}`);
  }

  obtenerNombresFrutasPorPedido(pedidoId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/frutasPedido/nombres/${pedidoId}`);
  }

  obtenerNombresEspecialesPorPedido(pedidoId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/especialesPedido/nombres/${pedidoId}`);
  }

  obtenerNombresLicoresPorPedido(pedidoId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/licoresPedido/nombres/${pedidoId}`);
  }

  obtenerNombresSalsasPorPedido(pedidoId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/salsasPedido/nombres/${pedidoId}`);
  }

  obtenerNombresTopingsPorPedido(pedidoId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/topingsPedido/nombres/${pedidoId}`);
  }

  marcarComoAtendido(pedidoId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/pedidos/${pedidoId}/marcar-atendido`, {});
  }

  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/usuarios`);
  }

  borrarUsuario(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/usuarios/${id}`);
  }

  registerUsuario(form: any){
    console.log(form)
    return this.http.post<any[]>(`${this.apiUrl}/usuarios/create`,
      form,
    );
  }

  actualizarUsuario(id: number, formData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/usuarios/update/${id}`, formData);
  }


  borrarHelado(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/helados/${id}`);
  }

  actualizarHelado(id: number, formData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/helados/update/${id}`, formData);
  }

  registerHelado(form: any){
    console.log(form)
    return this.http.post<any[]>(`${this.apiUrl}/helados/create`,
      form,
    );
  }

  login(correo: string, contrasena: string) {
    return this.http.post<any>(`${this.apiUrl}/usuarios/login`, { correo, contrasena })
      .subscribe(
        (response) => {
          if (response.usuario) {
            this.usuario = response.usuario;
            // Redirigir según el permiso_id
            if (this.usuario.permiso_id === 1) {
              localStorage.setItem("nombre", JSON.stringify(this.usuario.nombre))
              localStorage.setItem("id", JSON.stringify(this.usuario.id))
              this.router.navigate(['/admin']);
            } else if (this.usuario.permiso_id === 2) {
              localStorage.setItem("nombre", JSON.stringify(this.usuario.nombre))
              localStorage.setItem("id", JSON.stringify(this.usuario.id))
              localStorage.setItem("usuario", JSON.stringify(this.usuario))
              this.router.navigate(['/home']);
            }
          } else {
            // Mostrar mensaje de error en caso de credenciales incorrectas
            console.error('Credenciales incorrectas');
          }
        },
        (error) => {
          console.error('Error en la solicitud de inicio de sesión', error);
        }
      );
  }

  getUsuario() {
    return this.usuario;
  }

  eliminarPedido(id: number): Observable<any> {
    const url = `${this.apiUrl}/pedidos/eliminar/${id}`;
    return this.http.delete(url);
  }

  getSumaTotalPedidos(userId: number): Observable<any> {
    const url = `${this.apiUrl}/pedidos/totalPedido/${userId}`;
    return this.http.get(url);
  }

  getUsersPedidos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/usuarios/usuariosPedidos`);
  }

  eliminarPedidosUsuario(userId: number): Observable<any> {
    const url = `${this.apiUrl}/usuarios/${userId}/borrar-pedidos`;
    return this.http.delete(url);
  }

  marcarPedidosComoAtendidos(userId: number): Observable<any> {
    const url = `${this.apiUrl}/pedidos/marcar-pedidos/${userId}`;
    return this.http.post(url, {});
  }

  pedidosUsuariosAdmin2(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/pedidos/${userId}/con-suma-ingredientes`);
  }

}
