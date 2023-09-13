import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-codigo-recuperacion',
  templateUrl: './codigo-recuperacion.component.html',
  styleUrls: ['./codigo-recuperacion.component.css']
})
export class CodigoRecuperacionComponent implements OnInit {
  codigoCorrecto = false;
  codigoIngresado = '';
  codigoIncorrecto = false;
  errorMensaje = ''; // Mensaje de error

  @ViewChildren('otpInput1', { read: ElementRef }) otpInput1!: QueryList<ElementRef>;
  @ViewChildren('otpInput2', { read: ElementRef }) otpInput2!: QueryList<ElementRef>;
  @ViewChildren('otpInput3', { read: ElementRef }) otpInput3!: QueryList<ElementRef>;
  @ViewChildren('otpInput4', { read: ElementRef }) otpInput4!: QueryList<ElementRef>;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {}

  verificarCodigo() {
    // Obtener el código ingresado por el usuario desde los campos de entrada
    const codigoIngresado = this.codigoIngresado;

    // Hacer una solicitud HTTP para obtener el código de recuperación
    this.getCodigoRecuperacionFromServer()
      .pipe(
        catchError((error) => {
          // Manejar el error de la solicitud HTTP y mostrar un mensaje al usuario
          console.error('Error en la solicitud HTTP:', error);
          this.errorMensaje = 'Ocurrió un error al verificar el código. Por favor, intenta nuevamente.';
          return throwError(error);
        })
      )
      .subscribe((codigoRecuperacion: string) => {
        console.log('Código recibido del servidor:', codigoRecuperacion);
        console.log('Código ingresado por el usuario:', codigoIngresado);

        if (codigoIngresado === codigoRecuperacion) {
          console.log('Código correcto, redirigiendo a /actualizar-contrasena');
          this.router.navigate(['/actualizar-contrasena']);
        } else {
          console.log('Código incorrecto');
          this.codigoIncorrecto = true;
          this.errorMensaje = 'El código ingresado es incorrecto. Por favor, verifica el código e intenta nuevamente.';
        }
      });
  }

  getCodigoRecuperacionFromServer(): Observable<string> {
    // Realiza una solicitud HTTP para obtener el código de recuperación desde el servidor
    // Reemplaza la URL con la que corresponda a tu API en Laravel
    return this.http.get<string>('http://localhost:8000/api/obtener-codigo-recuperacion');
  }
}
