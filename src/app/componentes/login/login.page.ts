import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { Router } from "@angular/router" ;
import { Geolocation,Geoposition } from '@ionic-native/geolocation/ngx'
import { auth } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
//import { LatLng } from '@ionic-native/google-maps';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(public authService: AuthService, private db: AngularFirestore, public router: Router, public geolocation: Geolocation   
    ) { }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((geposition:Geoposition) =>{
        console.log(geposition);
      
    })
 
  }

  
  
  onSubmitLogin()
  {
    this.geolocation.getCurrentPosition().then((geposition:Geoposition) =>{

      let latitud = geposition.coords.latitude.toString();
      let longitud = geposition.coords.longitude.toString();
 
     
    this.authService.login(this.email, this.password).then(res =>{
    this.authService.update_location(latitud,longitud)

    this.router.navigate(['/tabs']);

    }).catch(err => alert('Datos ingresados incorrectos!'));
    }).catch(err => alert('No se logro actualizar la ubicación, verifique la conexión con el GPS'));
    this.email = "";
    this.password = "";
  }
  

}