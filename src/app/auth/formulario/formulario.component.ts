import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { LoginRequest } from 'src/app/services/auth/loginRequest';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  loginForm=this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    contraseña: ['', Validators.required],
  })
  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) { }

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
