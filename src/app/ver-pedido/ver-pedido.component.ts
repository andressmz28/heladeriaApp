import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-pedido',
  templateUrl: './ver-pedido.component.html',
  styleUrls: ['./ver-pedido.component.css']
})
export class VerPedidoComponent implements OnInit{

  saborHelado!: string;
  frutasAcompanamiento!: string;
  salsaAderezo!: string;
  totalProducto!: number; 
  totalCompra!: number;

  ngOnInit() {
    // Valores iniciales de ejemplo (pueden ser reemplazados por los datos reales del pedido)
    this.saborHelado = 'Vainilla';
    this.frutasAcompanamiento = 'Fresas';
    this.salsaAderezo = 'Chocolate';
    this.totalProducto = 65;
    this.totalCompra = 65;
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
}
