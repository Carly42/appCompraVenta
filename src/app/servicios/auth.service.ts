import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import { Router } from "@angular/router";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import { promise } from 'protractor';
import { resolve, reject } from 'q';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

export interface Pedidos{
  uidv: string;
  cliente: string;
  producto: string;
  cantidad: string;
  fecha: string;
  total: string;
  pago: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private pedidosCollection: AngularFirestoreCollection<Pedidos>;

  constructor(private AFauth : AngularFireAuth,
    private router: Router,
    private db: AngularFirestore) {
      this.pedidosCollection = db.collection<Pedidos>('pedidos');
     }

  login(email:string, password:string)
  {
    return new Promise((resolve, rejected) => {
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => rejected(err));
    })
  }

  logout(){
    this.AFauth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    })
  }

  register(nombre: string, apellido: string, ci: string, telf: string, email: string, password:string){
    return new Promise((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email, password).then(res => {
        var uid = res.user.uid;
        this.db.collection('vendedores').doc(uid).set({
          uid : uid,
          nombre : nombre,
          apellido : apellido,
          ci : ci,
          telf : telf,
          email : email

        })
        resolve(res);
      }).catch(err => reject(err));
    })
  }

  pedido(cliente: string, producto: string, cantidad: string, fecha: string, total: string, pago: string){
    return new Promise((resolve, reject) => {
        let user = this.AFauth.auth.currentUser;
        var uid = user.uid;
        this.pedidosCollection.add({
          uidv : uid,
          cliente : cliente,
          producto : producto,
          cantidad : cantidad,
          fecha : fecha,
          total: total,
          pago : pago
        })
    })
  }

  cuenta(){
    let user = this.AFauth.auth.currentUser;
    var uid = user.uid;
   return uid;
  }
}
