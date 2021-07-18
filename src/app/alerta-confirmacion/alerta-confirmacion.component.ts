import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-alerta-confirmacion",
  templateUrl: "./alerta-confirmacion.component.html",
  styleUrls: ["./alerta-confirmacion.component.css"]
})
export class AlertaConfirmacionComponent implements OnInit {
  public active: Boolean;
  @Output() clicado: EventEmitter<null> = new EventEmitter();

  constructor() {
    this.active = false;
  }

  ngOnInit() { }

  ocultar() {
    this.active = false;
    this.clicado.emit();
  }

  mostrar() {
    this.active = true;
  }
}
