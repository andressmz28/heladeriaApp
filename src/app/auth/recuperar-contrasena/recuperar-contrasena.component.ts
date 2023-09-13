import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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
    private http: HttpClient,
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

    // Envía la solicitud HTTP POST a la URL de Laravel para la recuperación de contraseña
    this.http.post(apiUrl, { email }).subscribe(
      (response: any) => {
        // Muestra el mensaje de éxito del servidor
        console.log('Éxito:', response.message);

        // Almacena el correo electrónico en la sesión
        sessionStorage.setItem('correo_recuperacion', email);

        // Redirige al componente de actualización de contraseña
        // Reemplaza 'actualizar-contrasena' con la ruta correcta a tu componente de actualización de contraseña
        // Por ejemplo: this.router.navigate(['/actualizar-contrasena']);
      },
      error => {
        // Muestra el mensaje de error del servidor
        console.error('Error al enviar la solicitud de recuperación de contraseña:', error);
      }
    );
  }
}
