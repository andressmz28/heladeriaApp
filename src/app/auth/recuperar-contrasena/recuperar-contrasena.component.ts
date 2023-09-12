// RecuperarContrasenaComponent.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Importa el módulo HttpClient
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.css']
})
export class RecuperarContrasenaComponent {
  recuperarContrasenaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient, // Inyecta HttpClient
    private toastr: ToastrService
  ) {
    this.recuperarContrasenaForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get email() {
    return this.recuperarContrasenaForm.get('email');
  }

  recuperarContrasena() {
    if (this.recuperarContrasenaForm.invalid) {
      this.toastr.error('Por favor, ingrese un correo válido.', 'Error');
      return;
    }

    const email = this.email?.value;
    const apiUrl = 'http://localhost:8000/api/recuperar-contrasena';

    // URL para recuperación de contraseña
 // URL para recuperación de contraseña

    // Envía la solicitud HTTP POST a la URL de Laravel para la recuperación de contraseña
    this.http.post(apiUrl, { email }).subscribe(
      (response: any) => { // Corrige el tipo de respuesta a 'any'
        // Muestra el mensaje de éxito del servidor
        console.log('Éxito:', response.message);
      },
      error => {
        // Muestra el mensaje de error del servidor
        console.error('Error al enviar la solicitud de recuperación de contraseña:', error);
      }
    );
    
  }
}
