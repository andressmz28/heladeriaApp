import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms'; // Importa FormsModule


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
  selectedTopings: any[] = [];
  selectedLicor: any;
  selectedHelado: any;

  helados: any[] = [];
  dulces: any[] = [];
  especiales: any[] = [];
  frutas: any[] = [];
  salsas: any[] = [];
  topings: any[] = [];
  licores: any[] = [];

  maxTopings: number = 3;

  constructor(private apiService: ApiService) { }

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

  topingDisabled(toping: any): boolean {
    const selectedCount = Object.values(this.selectedTopings).filter(Boolean).length;
    return selectedCount >= 3 && !this.selectedTopings[toping.id];
  }
  realizarPedido() {
    const pedidoData = {
      dulce_id: this.selectedDulce,
      especial_id: this.selectedEspecial,
      fruta_id: this.selectedFruta,
      salsa_id: this.selectedSalsa,
      topings: this.selectedTopings.map(toping => toping.id),
      licor_id: this.selectedLicor,
      // Agregar más datos según la estructura de tu pedido
    };

    this.apiService.hacerPedido(pedidoData).subscribe((data: any) => {
      // Mostrar información del pedido o redirigir a otra pantalla
    });
  }

}
