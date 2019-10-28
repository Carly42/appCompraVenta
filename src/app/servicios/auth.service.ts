import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import { promise } from 'protractor';
import { resolve, reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth,
    private router: Router,
    private db: AngularFirestore) { }

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
        const uid = res.user.uid;
        this.db.collection('usuarios').doc(uid).set({
          uid :uid,
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
}
