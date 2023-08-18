import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8000'; // Cambia la URL según tu configuración de backend

  constructor(private http: HttpClient) { }

  getHelados(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/helados`);
  }
  getDulces(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/dulces`);
  }

  getEspeciales(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/especiales`);
  }

  getFrutas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/frutas`);
  }

  getSalsas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/salsas`);
  }

  getTopings(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/topings`);
  }

  getLicores(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/licores`);
  }

  hacerPedido(pedidoData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/pedidos`, pedidoData);
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

}
