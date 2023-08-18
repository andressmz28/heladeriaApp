import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-hacer-pedido',
  templateUrl: './hacer-pedido.component.html',
  styleUrls: ['./hacer-pedido.component.css']
})
export class HacerPedidoComponent implements OnInit {
  selectedDulce: any;
  selectedEspecial: any;
  selectedFruta: any;
  selectedSalsa: any;
  selectedTopings: any;
  selectedLicor: any;
  selectedHelado: any;
  selectedEndulsante: any;



  helados: any[] = [];
  dulces: any[] = [];
  especiales: any[] = [];
  frutas: any[] = [];
  salsas: any[] = [];
  topings: any[] = [];
  licores: any[] = [];

  maxTopings: number = 3;

  constructor(private apiService: ApiService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.apiService.getHelados().subscribe((data: any[]) => {
      this.helados = data;
    });
    this.apiService.getDulces().subscribe((data: any[]) => {
      this.dulces = data;
    });
    this.apiService.getEspeciales().subscribe((data: any[]) => {
      this.especiales = data;
    });
    this.apiService.getFrutas().subscribe((data: any[]) => {
      this.frutas = data;
    });
    this.apiService.getSalsas().subscribe((data: any[]) => {
      this.salsas = data;
    });
    this.apiService.getTopings().subscribe((data: any[]) => {
      this.topings = data;
    });
    this.apiService.getLicores().subscribe((data: any[]) => {
      this.licores = data;
    });
  }

  agregarToping() {
    if (this.selectedTopings.length < this.maxTopings) {
      this.selectedTopings.push({});
    }
  }
  mostrarAlerta(mensaje: string) {
    this.snackBar.open(mensaje, '', {
      duration: 3000, // Duración en milisegundos (opcional)
      panelClass: [`alerta`],
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  topingDisabled(toping: any): boolean {
    const selectedCount = Object.values(this.selectedTopings).filter(Boolean).length;
    return selectedCount >= 3 && !this.selectedTopings[toping.id];
  }
  realizarPedido() {
    const pedidoData = {
      endulsante: this.selectedEndulsante,
      user_id: '1',
      helado_id: this.selectedHelado,

      // Agregar más datos según la estructura de tu pedido
    };

    // this.apiService.hacerPedido(pedidoData).subscribe((data: any) => {
    //   // Mostrar información del pedido o redirigir a otra pantalla
    // });
    console.log(pedidoData,this.selectedDulce, this.selectedEspecial,this.selectedFruta,this.selectedLicor,this.selectedSalsa);


    this.apiService.hacerPedido(pedidoData).subscribe((pedidoCreado: any) => {
      const pedidoId = pedidoCreado.id;

      console.log(pedidoId);

      // Realizar los POST para las tablas relacionadas
      this.apiService.crearDulcePedido(this.selectedDulce, pedidoId).subscribe();
      this.apiService.crearEspecialPedido(this.selectedEspecial, pedidoId).subscribe();
      this.apiService.crearFrutaPedido(this.selectedFruta, pedidoId).subscribe();
      this.apiService.crearLicorPedido(this.selectedLicor, pedidoId).subscribe();
      this.apiService.crearSalsaPedido(this.selectedSalsa, pedidoId).subscribe();

      this.apiService.crearTopingPedido(this.selectedTopings, pedidoId).subscribe();

      // Aquí puedes redirigir a la pantalla de ver-pedido con el ID del pedido creado
      console.log("Se envio el post");
      this.mostrarAlerta('Pedido Realizado!');
    },
    (error: any) => {
      this.mostrarAlerta('Error al crear el pedido');
      // Manejo de errores
    });


  }

}
