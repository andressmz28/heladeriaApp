import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent {
  ventas: any[] = [];



  constructor(private http: HttpClient,private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    // Llama a la API de Laravel para obtener los datos de ventas

      this.calcularTotalVentas();
      this.getdata();
    }

    getdata(){
      this.apiService.getUsersPedidos().subscribe(
        (data) => {
          this.ventas = data;
          console.log(this.ventas)
        },
        (error) => {
          console.error('Error al obtener la información de usuarios:', error);
        }
      );
     }

     calcularTotalVentas(): number {
        const inicial=0;
        console.log(this.ventas);

       const suma = this.ventas.reduce((total, venta) => total + parseInt(venta.total_dinero_pedidos), inicial);
      console.log(this.ventas.reduce((total, venta) => total + venta.total_dinero_pedidos, 0));
      return suma;
    }


    // Aquí puedes implementar la lógica para exportar la tabla a Excel
    // Puedes usar una librería como 'xlsx' para esto.
    exportarExcel() {
      const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(document.getElementById('tablaVentas'));
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Ventas');

      // Exporta el archivo Excel
      XLSX.writeFile(wb, 'reporte_ventas.xlsx');
    }


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
