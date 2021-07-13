import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConEstadoComponent } from './con-estado/con-estado.component';
import { SinEstadoComponent } from './sin-estado/sin-estado.component';
import { AlertaConfirmacionComponent } from './alerta-confirmacion/alerta-confirmacion.component';
import { ShoppingCartStatusComponent } from './shopping-cart-status/shopping-cart-status.component';
import { ContenedorImagenComponent } from './contenedor-imagen/contenedor-imagen.component'

@NgModule({
  declarations: [
    AppComponent,
    ConEstadoComponent,
    SinEstadoComponent,
    AlertaConfirmacionComponent,
    ShoppingCartStatusComponent,
    ContenedorImagenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
