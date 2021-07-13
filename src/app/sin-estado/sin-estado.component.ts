import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Component({
  selector: 'app-sin-estado',
  templateUrl: './sin-estado.component.html',
  styleUrls: ['./sin-estado.component.css']
})
export class SinEstadoComponent implements OnInit {
  @Input()
    producto!: Producto;

  @Output() productoSeleccionado: EventEmitter<Producto> = new EventEmitter();

  private disabled: boolean =false;
  public accionCompra: string="";

  constructor() { }

  ngOnInit() {
    this.accionCompra = `BUY FOR $${this.producto.precio}`;
  }

  seleccionarItem() {
    this.disabled = true;
    this.accionCompra = "ADDED TO CART";
    this.productoSeleccionado.emit(this.producto);
  }

  isItemDisabled() {
    return !!this.disabled;
  }
}
