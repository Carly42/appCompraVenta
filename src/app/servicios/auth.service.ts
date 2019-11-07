import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import { Router } from "@angular/router";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { promise } from 'protractor';
import { resolve, reject } from 'q';
import * as firebase from 'firebase';
//import { firestore } from 'firebase';

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
    private db: AngularFirestore) { }


  cuenta(){
    let user = this.AFauth.auth.currentUser;
    var uid = user.uid;
    return uid;
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

  register(nombre: string, apellido: string, ci: string, telf: string, email: string, password:string, latitud:string,longitud:string){
    return new Promise((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email, password).then(res => {
        const uid = res.user.uid;
        this.db.collection('vendedores').doc(uid).set({
          uid :uid,
          nombre : nombre,
          apellido : apellido,
          ci : ci,
          telf : telf,
          email : email,
          latitud: latitud,
          longitud: longitud

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
  update_location(latitud:string,longitud:string)
  { return new Promise((resolve, reject) => {
    let id = this.cuenta();
    this.db.collection('vendedores').doc(id).update({
          latitud: latitud,
          longitud: longitud
        });
      })
    }
  asignacion_cliente(nombre:string,apellido:string){
  let clienteAsignado = this.db.collection('asignarvendedor',ref => 
  ref.where('vendedor', '==', nombre + " " + apellido)).get();
    return clienteAsignado;
  }
  

  
}
