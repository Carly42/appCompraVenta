import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { Router } from "@angular/router";
import { Geolocation,Geoposition } from '@ionic-native/geolocation/ngx'
import { LatLng } from '@ionic-native/google-maps';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public nombre: string;
  public apellido: string;
  public ci: string;
  public telf: string;
  public email: string;
  public password: string;
  //public cpassword: string;
  //aquí
  constructor(private auth: AuthService, private router: Router,public geolocation: Geolocation,) { }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((geposition:Geoposition) =>{
 
        console.log(geposition);
    }) 
  }

  onSubmitRegister(){
    this.geolocation.getCurrentPosition().then((geposition:Geoposition) =>{
     // let coord : geposition;
     let latitud = geposition.coords.latitude.toString();
     let longitud = geposition.coords.longitude.toString();

    this.auth.register(this.nombre, this.apellido, this.ci, this.telf, this.email, this.password,latitud,longitud).then(auth => {
      this.router.navigate(['/tabs']);
      console.log(auth);
    
    }).catch(err => console.log(err));
    this.nombre = "";
    this.apellido = "";
    this.ci = "";
    this.telf = "";
    this.email = "";
    this.password = "";
  })
  }

 
}
