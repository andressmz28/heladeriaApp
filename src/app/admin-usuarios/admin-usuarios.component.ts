import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.css']
})
export class AdminUsuariosComponent {

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
     'correo':new FormControl(),
     'contrasena':new FormControl(),
     'permiso_id':new FormControl(),
    })
    this.getdata();
   }

   update(tableData: any): void {
     const id = tableData.id;
     const formData = this.formulario.value; // Obtiene los valores del formulario

     this.apiService.actualizarUsuario(id, formData).subscribe(
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
     this.apiService.getUsuarios().subscribe((data: any[]) => {
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
     this.apiService.registerUsuario(formulario.value).subscribe((data: any) => {
       console.log(data)
     })
   }

   getdata(){
     this.apiService.getUsuarios().subscribe((data: any[]) => {
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
       correo:tableData.correo,
       contrasena:tableData.contrasena,
       permiso_id:tableData.permiso_id,
     })
     console.log( this.formulario.id)
   }

   delete(index:number, tableData:any){
     this.formulario.id= tableData.id;
     console.log( this.formulario.id)
     this.dulces.splice(index, 1);
     this.apiService.borrarUsuario(this.formulario.id).subscribe(
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

