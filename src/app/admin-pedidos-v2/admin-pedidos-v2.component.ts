import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-pedidos-v2',
  templateUrl: './admin-pedidos-v2.component.html',
  styleUrls: ['./admin-pedidos-v2.component.css']
})
export class AdminPedidosV2Component {


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
    this.apiService.getUsersPedidos().subscribe(
      (data) => {
        this.dulces = data;
        console.log(this.dulces)
      },
      (error) => {
        console.error('Error al obtener la información de usuarios:', error);
      }
    );
   }

   addmodel(){
     this.isedit=false;
     this.formulario.reset();
   }

   edit(i:any, tableData:any){
    //  this.isedit=true;
    //  this.formulario.id= tableData.userid;
     console.log(tableData.user_id)
     localStorage.setItem("idUsuarioPedidos", tableData.user_id)
     this.router.navigateByUrl('admin/pedidos/pedidoUser');
   }

   delete(index:number, tableData:any){

     this.formulario.id= tableData.id;
     console.log( tableData.user_id)
      this.dulces.splice(index, 1);
      this.userId = tableData.user_id
      this.apiService.marcarPedidosComoAtendidos(this.userId).subscribe(
        (response) => {
          console.log('Pedidos marcados como atendidos:', response);
          // Realiza alguna acción después de marcar los pedidos como atendidos
        },
        (error) => {
          console.error('Error al marcar los pedidos como atendidos:', error);
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
