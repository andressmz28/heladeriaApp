import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-actualizar-contrasena',
  templateUrl: './actualizar-contrasena.component.html',
  styleUrls: ['./actualizar-contrasena.component.css']
})
export class ActualizarContrasenaComponent implements OnInit {
  nuevaContrasena: string = ''; // Propiedad para almacenar la nueva contraseña
  correoRecuperacion: string = ''; // Propiedad para almacenar el correo de recuperación

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Recupera el correo de recuperación desde sessionStorage
    this.correoRecuperacion = sessionStorage.getItem('correo_recuperacion') || '';
  }

  actualizarContrasena() {
    // Realiza la solicitud HTTP aquí
    const apiUrl = 'http://localhost:8000/api/actualizar-contrasena';

    // Verifica si el correo de recuperación existe
    if (this.correoRecuperacion) {
      console.log('Correo de recuperación:', this.correoRecuperacion);
      console.log('Nueva contraseña:', this.nuevaContrasena); // Agregado para depuración

      // Luego, puedes realizar la solicitud HTTP y enviar el correo de recuperación y la nueva contraseña como parte de los datos de la solicitud.
      // Asegúrate de que los datos de la solicitud se envíen correctamente al servidor.
      this.http.post(apiUrl, { contrasena: this.nuevaContrasena, correoRecuperacion: this.correoRecuperacion }).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          // Realiza acciones adicionales después de la actualización exitosa
        },
        (error) => {
          console.error('Error en la solicitud:', error);
          // Maneja el error de la solicitud HTTP
        }
      );
    } else {
      console.error('El correo de recuperación no está definido.');
      // Maneja el caso en el que el correo de recuperación no esté definido
    }
  }
}
