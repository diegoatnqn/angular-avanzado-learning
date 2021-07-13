import {Component,OnInit,Input,EventEmitter,Output,OnChanges,SimpleChanges, DoCheck, OnDestroy} from "@angular/core";
import { Producto } from "../interfaces/producto";

@Component({
  selector: "app-shopping-cart-status",
  templateUrl: "./shopping-cart-status.component.html",
  styleUrls: ["./shopping-cart-status.component.css"]
})
export class ShoppingCartStatusComponent implements OnInit, OnChanges, DoCheck, OnDestroy{
  @Input()
    precio!: number;
  @Input()
    modeloDeTienda!: Array<Producto>;

  @Output() pagar: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.activarEventoTeclado();
  }

  ngOnDestroy() {
    document.removeEventListener('keypress',this.onTeclado);
  }


  activarEventoTeclado() {
    document.addEventListener('keypress', (evento) => {     //oigo cada tecla presionada
      this.onTeclado(evento);
    })
  }

  ngOnChanges(cambios: SimpleChanges) {
    console.log(cambios);
    if (cambios.precio.currentValue < cambios.precio.previousValue) {
      alert("¿Seguro que deseas sacar items?");
    }
  }

  ngDoCheck() {
    //console.log("DO CHECK ACTIVADO");
  }

  onTeclado(_evento: any) {
    if (_evento.code === 'Enter') {     //si tecleo enter, se realiza el pago
      this.realizarPago()
    }
  }

  realizarPago() {
    this.pagar.emit();
  }
}
