import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

  formulario:FormGroup|any;
  isedit:boolean=false;
  tableDataname:any;
  tableDatanameShow:any;
  dulces: any[] = [];
  data: any[] = [];
  cantidadDulces: number=0;
  cantidadPedidos: number=0;
  cantidadUsuarios: number=0;
  cantidadHelados: number=0;
  cantidadLicores: number=0;
  cantidadFrutas: number=0;
  cantidadTopings: number=0;
  cantidadSalsas: number=0;

  username:any;
  usernameShow:any;
  constructor( private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
     'nombre':new FormControl(),
     'precio':new FormControl(),
     'gramos':new FormControl(),
    })
    this.getdata();
    this.getCantidadCardsDashboard();
   }

   getCantidadCardsDashboard(){
    this.apiService.getCantidadPedidosNoAtendidos().subscribe(
      count => {
        this.cantidadPedidos = count; // Asigna el valor a la propiedad
      },
      error => {
        console.error('Error al obtener la cantidad de dulces:', error);
      }
    );

    this.apiService.getCantidadSalsas().subscribe(
      count => {
        this.cantidadSalsas = count; // Asigna el valor a la propiedad
      },
      error => {
        console.error('Error al obtener la cantidad de dulces:', error);
      }
    );

    this.apiService.getCantidadTopings().subscribe(
      count => {
        this.cantidadTopings= count; // Asigna el valor a la propiedad
      },
      error => {
        console.error('Error al obtener la cantidad de dulces:', error);
      }
    );

    this.apiService.getCantidadLicores().subscribe(
      count => {
        this.cantidadLicores = count; // Asigna el valor a la propiedad
      },
      error => {
        console.error('Error al obtener la cantidad de dulces:', error);
      }
    );


      this.apiService.getCantidadFrutas().subscribe(
        count => {
          this.cantidadFrutas = count; // Asigna el valor a la propiedad
        },
        error => {
          console.error('Error al obtener la cantidad de dulces:', error);
        }
      );

    this.apiService.getCantidadDulces().subscribe(
      count => {
        this.cantidadUsuarios = count; // Asigna el valor a la propiedad
      },
      error => {
        console.error('Error al obtener la cantidad de dulces:', error);
      }
    );

    this.apiService.getCantidadHelados().subscribe(
      count => {
        this.cantidadHelados = count; // Asigna el valor a la propiedad
      },
      error => {
        console.error('Error al obtener la cantidad de dulces:', error);
      }
    );

    this.apiService.getCantidadDulces().subscribe(
      count => {
        this.cantidadDulces = count; // Asigna el valor a la propiedad
      },
      error => {
        console.error('Error al obtener la cantidad de dulces:', error);
      }
    );
  }

   update(tableData: any): void {
     const id = tableData.id;
     const formData = this.formulario.value; // Obtiene los valores del formulario

     this.apiService.actualizarDulce(id, formData).subscribe(
       response => {
         console.log(response); // Datos actualizados
         // Puedes manejar la lógica de actualización en tu componente
         // this.showInfo();
         // this.getdata();
       },
       error => {
         console.error(error); // Mensaje de error
       }
     );
     this.dulces=[];
     this.apiService.getDulces().subscribe((data: any[]) => {
       this.dulces = data;
     });
     console.log("fin del update")
   }


   sendata(formulario:FormGroup){
     this.dulces.push(this.formulario.value);
     this.tableDataname= this.formulario.value.nombre;
     console.log(formulario.value )
     // this._dataservice.postdata(this.formulario.value).subscribe(res=>{
     //   this.showSuccess(); notificacion
     //   this.getdata();
     // })
     this.apiService.registerDulce(formulario.value).subscribe((data: any) => {
       console.log(data)
     })
   }

   getdata(){
     this.apiService.getDulces().subscribe((data: any[]) => {
       this.dulces = data;
     });
     // this._dataservice.getdata().subscribe(res=>{
     //   this.data = res;
     // })
   }

   addmodel(){
     this.isedit=false;
     this.formulario.reset();
   }

   edit(i:any, tableData:any){
     this.isedit=true;
     this.formulario.id= tableData.id;
     this.formulario.setValue({
       nombre:tableData.nombre,
       precio:tableData.precio,
       gramos:tableData.gramos,
     })
     console.log( this.formulario.id)
   }

   delete(index:number, tableData:any){
     this.formulario.id= tableData.id;
     console.log( this.formulario.id)
     this.dulces.splice(index, 1);
     this.apiService.borrarDulce(this.formulario.id).subscribe(
       response => {
         console.log(response.message); // Mensaje de éxito
         // Puedes actualizar la lista de dulces si es necesario
       },
       error => {
         console.error(error.error); // Mensaje de error
       }
       );
   }

  //Sidebar toggle show hide function
status = false;
addToggle()
{
  this.status = !this.status;
}
logout()
{
  this.router.navigateByUrl('/');
}

}
