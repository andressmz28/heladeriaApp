import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-helados',
  templateUrl: './admin-helados.component.html',
  styleUrls: ['./admin-helados.component.css']
})
export class AdminHeladosComponent {


  formulario:FormGroup|any;
  isedit:boolean=false;
  tableDataname:any;
  tableDatanameShow:any;
  dulces: any[] = [];
  data: any[] = [];
  username:any;
  usernameShow:any;
  cantidadDulces: number=0;

  constructor( private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
     'nombre':new FormControl(),
     'precio':new FormControl(),
    })
    this.getdata();
   }

   update(tableData: any): void {
     const id = tableData.id;
     const formData = this.formulario.value; // Obtiene los valores del formulario

     this.apiService.actualizarHelado(id, formData).subscribe(
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
     this.apiService.getHelados().subscribe((data: any[]) => {
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
     this.apiService.registerHelado(formulario.value).subscribe((data: any) => {
       console.log(data)
     })
   }

   getdata(){
     this.apiService.getHelados().subscribe((data: any[]) => {
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
     this.apiService.borrarHelado(this.formulario.id).subscribe(
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

