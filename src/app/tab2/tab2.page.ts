import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { AuthService } from "../servicios/auth.service";

export interface MiCuenta {
  nombre: string;
  apellido: string;
  ci: string;
  telf: string;
  correo: string;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private miCuentaCollection: AngularFirestoreDocument<MiCuenta>;
  miCuenta: Observable<MiCuenta>;
  constructor(public auth: AuthService, private db: AngularFirestore) {

      let id = this.auth.cuenta();
      this.miCuentaCollection = this.db.doc<MiCuenta>('vendedores/'+id);
      this.miCuenta = this.miCuentaCollection.valueChanges();
      
    }
      asignacion_cliente(nombre:string,apellido:string){
      let clienteAsignado = this.db.collection('asignarvendedor',ref => 
      ref.where('vendedor', '==', nombre + " " + apellido)).get();
      }
      
   
  onLogOut(){
    this.auth.logout();
  }
}
