import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  userForm!: FormGroup;
  errorContrasena = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required],
      confirmarContrasena: ['', Validators.required]
    });
  }

  registrarUsuario() {
    if (this.userForm.invalid || this.userForm.controls['contrasena'].value !== this.userForm.controls['confirmarContrasena'].value) {
      this.errorContrasena = true;
      return;
    }
  
    const usuario = {
      nombre: this.userForm.controls['nombre'].value,
      apellido: this.userForm.controls['apellido'].value,
      correo: this.userForm.controls['correo'].value,
      contrasena: this.userForm.controls['contrasena'].value
    };
  
    this.http.post<any>('http://localhost:8000/api/registrar-usuario', usuario)
      .subscribe(
        response => {
          console.log('Usuario registrado exitosamente', response);
          this.errorContrasena = false;
        },
        error => {
          console.error('Error al registrar usuario', error);
          this.errorContrasena = false;
        }
      );
  }
  

  limpiarMensajeError() {
    this.errorContrasena = false;
  }
}

