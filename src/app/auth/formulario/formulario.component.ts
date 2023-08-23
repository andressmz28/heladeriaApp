import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { LoginRequest } from 'src/app/services/auth/loginRequest';
import { ApiService } from '../../services/api.service';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  correo: any;
  contrasena:any;

  loginForm=this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    contraseña: ['', Validators.required],
  })
  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService, private apiService: ApiService) { }

  ngOnInit() {
    const usuario = this.apiService.getUsuario();
    if (usuario) {
      console.log('Usuario autenticado:', usuario);
    }
  }

  iniciarSesion() {
    this.correo = this.loginForm.value.email;
    this.contrasena = this.loginForm.value.contraseña;
    this.apiService.login(this.correo, this.contrasena);
  }

  get email(){
    return this.loginForm.controls.email;
  }

  get password(){
    return this.loginForm.controls.contraseña;
  }

  login(){
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          console.log(errorData);
        },
        complete: () => {
          console.info("Login completo");
        }
      });
      this.router.navigateByUrl('/home');
      this.loginForm.reset();
    }
    else{
      this.loginForm.markAllAsTouched();
      alert("Error al ingresar los datos");
    }
  }

}
