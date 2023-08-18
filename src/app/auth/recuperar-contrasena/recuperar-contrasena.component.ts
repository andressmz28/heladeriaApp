import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.css']
})
export class RecuperarContrasenaComponent {
  recuperarContrasenaForm: FormGroup;
  showToast: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
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
      return; // No realizar la solicitud si el formulario no es válido
    }

    const email = this.email?.value;
    this.authService.solicitarRecuperacionContrasena(email).subscribe(
      response => {
        this.toastr.success('Se ha enviado la solicitud de recuperación de contraseña.', 'Éxito');
        console.log('Solicitud de recuperación de contraseña enviada');
      },
      error => {
        this.toastr.error('Ocurrió un error al enviar la solicitud de recuperación de contraseña.', 'Error');
        console.error('Error al enviar la solicitud de recuperación de contraseña');
      }
    );
  }
}
