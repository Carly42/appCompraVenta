import { Component } from '@angular/core';
import { AuthService, Pedidos } from "../servicios/auth.service";


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public cliente: string;
  public producto: string;
  public cantidad: string;
  public fecha: string;
  public total: string;
  public pago: string;

  constructor(private auth: AuthService) {}

  async onSubmitPedido(){
    this.auth.pedido(this.cliente, this.producto, this.cantidad, this.fecha, this.total, this.pago).then(auth => {
      console.log(auth);
    }).catch(err => console.log(err));

    this.cliente = "";
    this.producto = "";
    this.cantidad = "";
    this.fecha = "";
    this.total = "";
    this.pago = "";
  }

}
