# Componentes - Avanzado (Curso linkedin learning)

Para saber como comunicar componentes en angular

## Estructura para no perderme

AppComponent -> conEstado -> SinEstado, shoppingCartStatus,AlertaConfirmacion <br>
<hr>

### App Con estado

Envía a hijo "SinEstado" un item con el nombre "producto". Recibe eventos de seleccion o deseleccion.<br>
Envia a hijo "ShoppingCartStatus" un precio total y el arreglo de items.<br>
Activa o desactiva AlertaConfirmacion con @ViewChild(AlertaConfirmacionComponent, { static: false })<br>
    
<hr>

### App Sin estado (Stateless component)

Recibe un producto del padre:<br>
    @Input() producto!: Producto;<br><br>

Envia eventos a padre: <br>
    @Output() productoSeleccionado: EventEmitter<Producto> = new EventEmitter();<br>
    @Output() productoDesSeleccionado: EventEmitter<Producto> = new EventEmitter();
<br>
  <hr>
  
### App Shopping Cart Status <br>
Recibe del padre un precio y un arreglo de items:<br>
    @Input() precio!: number;<br>
    @Input()  modeloDeTienda!: Array<Producto>;<br><br>
Envia un evento :<br>
  @Output() pagar: EventEmitter<null> = new EventEmitter();<br>

  Muestra elementos en el carrito segun estado de cada item del arreglo<br>
  *ngIf="item.status == 'active'"<br>
  <hr>
  # <a href="https://angular-componentes-avanzado.vercel.app/" target="_blank">DEMO</a>
