import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-pedidos-v3',
  templateUrl: './admin-pedidos-v3.component.html',
  styleUrls: ['./admin-pedidos-v3.component.css']
})
export class AdminPedidosV3Component {

  formulario:FormGroup|any;
  isedit:boolean=false;
  tableDataname:any;
  tableDatanameShow:any;
  dulces: any[] = [];
  data: any[] = [];
  userId: any; // Cambia esto según el ID de usuario deseado
  pedidosConSumaIngredientes: any[] = [];
  nombresDulces: any[] = [];
  nombresFrutas: any[] = [];
  nombresEspeciales: any[] = [];
  nombresLicores: any[] = [];
  nombresSalsas: any[] = [];
  nombresTopings: any[] = [];
  pedidoId: number=0

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
    this.pedidosUsuariosAdmin();
   }

   pedidosUsuariosAdmin() {
    console.log(this.userId)
    this.userId = localStorage.getItem("idUsuarioPedidos");
    console.log(this.userId)
    this.apiService.pedidosUsuariosAdmin2(this.userId)
    .subscribe((data: any[]) => {
      this.dulces = data;
    });
  }

   update(tableData: any): void {
     const id = tableData.id;
     const formData = this.formulario.value; // Obtiene los valores del formulario

     this.apiService.actualizarLicor(id, formData).subscribe(
       response => {
         console.log(response); // Datos actualizados
         // Puedes manejar la lógica de actualización en tu componente
         // this.showInfo();
         this.getdata();
       },
       error => {
         console.error(error); // Mensaje de error
       }
     );
     this.dulces=[];
     this.apiService.getLicores().subscribe((data: any[]) => {
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
     this.apiService.registerLicor(formulario.value).subscribe((data: any) => {
       console.log(data)
     })
   }

   getdata(){
     this.apiService.getLicores().subscribe((data: any[]) => {
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
       nombre:tableData.nombre_usuario,
       precio:tableData.nombre_helado,
       gramos:tableData.suma_total_ingredientes,
     })
     this.pedidoId = this.formulario.id;

     this.apiService.obtenerNombresDulcesPorPedido(this.pedidoId)
      .subscribe((data: any[]) => {
        this.nombresDulces = data;
      });

      this.apiService.obtenerNombresFrutasPorPedido(this.pedidoId)
      .subscribe((data: any[]) => {
        this.nombresFrutas = data;
      });

      this.apiService.obtenerNombresEspecialesPorPedido(this.pedidoId)
      .subscribe((data: any[]) => {
        this.nombresEspeciales = data;
      });

      this.apiService.obtenerNombresLicoresPorPedido(this.pedidoId)
      .subscribe((data: any[]) => {
        this.nombresLicores = data;
      });

      this.apiService.obtenerNombresSalsasPorPedido(this.pedidoId)
      .subscribe((data: any[]) => {
        this.nombresSalsas = data;
      });

      this.apiService.obtenerNombresTopingsPorPedido(this.pedidoId)
      .subscribe((data: any[]) => {
        this.nombresTopings = data;
      });
   }

   delete(index:number, tableData:any){
     this.formulario.id= tableData.id;
     console.log( this.formulario.id)
     this.dulces.splice(index, 1);
     this.apiService.marcarComoAtendido( this.formulario.id)
      .subscribe(
        () => {
          console.log('Pedido marcado como atendido con éxito');
          // Puedes realizar otras acciones después de marcar como atendido, como actualizar la vista.
        },
        (error) => {
          console.error('Error al marcar como atendido:', error);
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

