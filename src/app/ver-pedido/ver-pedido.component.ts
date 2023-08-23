import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-pedido',
  templateUrl: './ver-pedido.component.html',
  styleUrls: ['./ver-pedido.component.css']
})
export class VerPedidoComponent implements OnInit{


  userId:any;

  saborHelado!: string;
  frutasAcompanamiento!: string;
  salsaAderezo!: string;
  totalProducto!: number;
  totalCompra!: number;

  formulario:FormGroup|any;
  isedit:boolean=false;
  tableDataname:any;
  tableDatanameShow:any;
  dulces: any[] = [];
  data: any[] = [];
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

  ngOnInit() {
    // Valores iniciales de ejemplo (pueden ser reemplazados por los datos reales del pedido)
    this.userId = localStorage.getItem("id")
    this.saborHelado = 'Vainilla';
    this.frutasAcompanamiento = 'Fresas';
    this.salsaAderezo = 'Chocolate';
    this.totalProducto = 65;
    this.totalCompra = 65;

    this.formulario = new FormGroup({
      // 'nombre':new FormControl(),
      'precio':new FormControl(),
      'gramos':new FormControl(),
     })
    this.getdata();
    this.pedidosUsuariosAdmin();

  }

  modificar() {
    // Aquí puedes implementar la lógica para modificar los detalles del pedido
    // Puedes abrir un cuadro de diálogo o una página para editar los detalles del helado
    console.log('Modificar pedido');
  }

  eliminar() {
    // Aquí puedes implementar la lógica para eliminar el pedido actual
    // Puedes mostrar un cuadro de confirmación antes de eliminar
    console.log('Eliminar pedido');
  }

  pedidosUsuariosAdmin() {
     this.apiService.pedidosUsuarioCliente(this.userId).subscribe((data: any[]) => {
       this.dulces = data;
     });
  }

  //  update(tableData: any): void {
  //    const id = tableData.id;
  //    const formData = this.formulario.value; // Obtiene los valores del formulario

  //    this.apiService.actualizarLicor(id, formData).subscribe(
  //      response => {
  //        console.log(response); // Datos actualizados
  //        // Puedes manejar la lógica de actualización en tu componente
  //        // this.showInfo();
  //        this.getdata();
  //      },
  //      error => {
  //        console.error(error); // Mensaje de error
  //      }
  //    );
  //    this.dulces=[];
  //    this.apiService.pedidosUsuarioCliente(this.userId).subscribe((data: any[]) => {
  //     this.dulces = data;
  //   });
  //    console.log("fin del update")
  //  }


  //  sendata(formulario:FormGroup){
  //    this.dulces.push(this.formulario.value);
  //   //  this.tableDataname= this.formulario.value.nombre;
  //    console.log(formulario.value )
  //    // this._dataservice.postdata(this.formulario.value).subscribe(res=>{
  //    //   this.showSuccess(); notificacion
  //    //   this.getdata();
  //    // })
  //    this.apiService.registerLicor(formulario.value).subscribe((data: any) => {
  //      console.log(data)
  //    })
  //  }

   getdata(){
     this.apiService.pedidosUsuarioCliente(this.userId).subscribe((data: any[]) => {
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
       precio:tableData.nombre_helado,
       gramos:tableData.suma_total_ingredientes,
     })
     this.pedidoId = this.formulario.id;
     console.log(this.pedidoId)

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
