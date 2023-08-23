import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
// import { MatSnackBar } from '@angular/material/snack-bar';


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
  userId: any

  maxTopings: number = 3;

  //,private snackBar: MatSnackBar
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem("id")
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
    // this.snackBar.open(mensaje, '', {
    //   duration: 3000, // Duración en milisegundos (opcional)
    //   panelClass: [`alerta`],
    //   horizontalPosition: 'center',
    //   verticalPosition: 'top',
    // });
  }

  topingDisabled(toping: any): boolean {
    const selectedCount = Object.values(this.selectedTopings).filter(Boolean).length;
    return selectedCount >= 3 && !this.selectedTopings[toping.id];
  }
  realizarPedido() {
    const pedidoData = {
      endulsante: this.selectedEndulsante,
      user_id: this.userId,
      helado_id: this.selectedHelado,

      // Agregar más datos según la estructura de tu pedido
    };

    // this.apiService.hacerPedido(pedidoData).subscribe((data: any) => {
    //   // Mostrar información del pedido o redirigir a otra pantalla
    // });
    console.log(pedidoData,this.selectedDulce, this.selectedEspecial,this.selectedFruta,this.selectedLicor,this.selectedSalsa);

    if (this.selectedEndulsante === null) {
      this.selectedEndulsante=0;
    }

    this.apiService.hacerPedido(pedidoData).subscribe((pedidoCreado: any) => {
      const pedidoId = pedidoCreado.id;

      console.log(pedidoId);

      // Realizar los POST para las tablas relacionadas
      if (this.selectedDulce != undefined) {
        this.apiService.crearDulcePedido(parseInt(this.selectedDulce), pedidoId).subscribe();
      }
      if (this.selectedEspecial != undefined) {
        this.apiService.crearEspecialPedido(parseInt(this.selectedEspecial), pedidoId).subscribe();
      }
      if (this.selectedFruta != undefined) {
        this.apiService.crearFrutaPedido(parseInt(this.selectedFruta), pedidoId).subscribe();
      }
      if (this.selectedLicor != undefined) {
        this.apiService.crearLicorPedido(parseInt(this.selectedLicor), pedidoId).subscribe();
      }
      if (this.selectedSalsa != undefined) {
        this.apiService.crearSalsaPedido(parseInt(this.selectedSalsa), pedidoId).subscribe();
      }
      if (this.selectedTopings != undefined) {
        this.apiService.crearTopingPedido(parseInt(this.selectedTopings), pedidoId).subscribe();
      }


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
