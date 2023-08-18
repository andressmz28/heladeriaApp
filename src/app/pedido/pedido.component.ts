import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit  {

  
  totalProducto!: number; 
  totalCompra!: number;
  nPedido!: number;
  hPedido!: string;
  nCliente!: string;

  ngOnInit() {
    // Valores iniciales de ejemplo (pueden ser reemplazados por los datos reales del pedido)

    this.totalProducto = 65;
    this.totalCompra = 65;
    this.nPedido=1;
    this.hPedido= '17:25'
    this.nCliente='Janeth Garcia'
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

