import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-actualizar-contrasena',
  templateUrl: './actualizar-contrasena.component.html',
  styleUrls: ['./actualizar-contrasena.component.css']
})
export class ActualizarContrasenaComponent {
  // Cambia el nombre del formulario para que coincida con el nombre en el HTML
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService
  ) {
    // Cambia el nombre del formulario aquí también
    this.form = this.formBuilder.group({
      contrasena: [''],
      confirmarContrasena: ['']
    });
  }

  actualizarContrasena() {
    const apiUrl = 'http://localhost:8000/api/actualizar-contrasena'; // Reemplaza con la URL correcta

    const datos = {
      contrasena: this.form.value.contrasena,
      confirmarContrasena: this.form.value.confirmarContrasena
    };

    this.http.post(apiUrl, datos).subscribe(
      (response: any) => {
        // Manejar la respuesta de éxito desde el backend
        this.toastr.success('Contraseña actualizada con éxito', 'Éxito');
      },
      (error: any) => {
        // Manejar el error desde el backend
        this.toastr.error('Error al actualizar la contraseña', 'Error');
      }
    );
  }
}
