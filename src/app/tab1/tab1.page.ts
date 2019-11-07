import { Component } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  LatLng
} from '@ionic-native/google-maps';
import { map } from "rxjs/operators";
import { NavController, IonApp } from '@ionic/angular';
import { IonicNativePlugin } from '@ionic-native/core';
import { element } from 'protractor';
import { Geolocation,Geoposition } from '@ionic-native/geolocation/ngx'
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';
import * as firebase from 'firebase';
import { firestore } from 'firebase';
import { MiCuenta } from '../tab2/tab2.page';

export interface ClienteAsignado{
  uid: string;
  distribuidor: string;
  fecha:string;

}
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  nombreVen: string;
  apellidoVen: string;
  map: GoogleMap;
 
  private clienteCollection: AngularFirestoreDocument<ClienteAsignado>;
  cliente: Observable<ClienteAsignado>; 
  
  constructor(
    public auth: AuthService, 
    private db: AngularFirestore,
    
    public navCtrl: NavController,
    public geolocation: Geolocation,   
    private googleMaps: GoogleMaps,
  ) {
    this.cargar_cliente();
    //console.log(this.cliente);
  }
  
  ngAfterViewInit(){
    this.geolocationNative();
    this.id_asignarvendedor()    
  }
  geolocationNative()
  {
   this.geolocation.getCurrentPosition().then((geposition:Geoposition) =>{
      console.log(geposition);
      this.loadMap(geposition);
  })
 }
  loadMap(position){

    let element: HTMLElement = document.getElementById('map');
    let map: GoogleMap = GoogleMaps.create(element);
    let latlng = new LatLng(position.coords.latitude, position.coords.longitude);
    let latlngc = new LatLng(-17.39413816623673,-66.17217190046676);

    map.one(GoogleMapsEvent.MAP_READY).then(() =>{

      let CameraPosition = {
        target: latlng,
        zoom: 17,
        tilt: 30
      };
      map.moveCamera(CameraPosition); 

      let markerOptions: MarkerOptions = {
       position: latlng,
       icon: "assets/icon/v.png",
       title: 'Estoy Aquí'
      };

      let markerOptionsc: MarkerOptions = {
        position: latlngc,
        icon: "assets/icon/cli.png",
        title: 'Cliente'
       };
      let Marker = map.addMarker(markerOptions).then((marker: Marker)=>{
        map.addMarker(markerOptionsc);  
         marker.showInfoWindow();
      })
    })
  
    
   }
  
   id_asignarvendedor()
   {
    var dbq = firebase.firestore();
    let apVen = this.apellido_vendedores();
    let noVen = this.nombre_vendedores();
    let clienteAsignado = this.db.collection('asignarvendedor',ref => 
      ref.where('vendedor', '==', 'Day Quelali')).snapshotChanges().pipe(map(rooms => {
        return rooms.map(a =>{
          const data = a.payload.doc.data() as ClienteAsignado;
          //data.uid = a.payload.doc.id;
          return data.uid;
        })
      }))
   
    }
    getChatRooms(){
    
      return this.db.collection('chatsRooms').snapshotChanges().pipe(map(rooms => {
        return rooms.map(a =>{
          const data = a.payload.doc.data() as MiCuenta;
          //data.u = a.payload.doc.id;
          return data;
        })
      }))
    }
   cargar_cliente(){
    let vid = this.getChatRooms(); 
    this.clienteCollection = this.db.doc<ClienteAsignado>('asignarvendedor/FhUJqipDOlesi8dP7r1c');
    this.cliente = this.clienteCollection.valueChanges();

   }
   nombre_vendedores(){

 
   // let clienteAsignado = this.db.collection('asignarvendedor',ref => 
  //  ref.where('vendedor', '==', this.nombreVen + " " + this.apellidoVen));

   let id = this.auth.cuenta();
   let nombreVendedor = firebase.database().ref('vendedores/' + id + '/nombre');
   console.log(nombreVendedor);
    return nombreVendedor;
}

apellido_vendedores(){
  let id = this.auth.cuenta();
  let apellidoVendedor = firebase.database().ref('vendedores/' + id + '/nombre');
  console.log(apellidoVendedor);
   return apellidoVendedor;

  // let clienteAsignado = this.db.collection('asignarvendedor',ref => 
 //  ref.where('vendedor', '==', this.nombreVen + " " + this.apellidoVen));
 
}

  
  click_location(){
    this.geolocation.getCurrentPosition().then((geposition:Geoposition) =>{

      let latitud = geposition.coords.latitude.toString();
      let longitud = geposition.coords.longitude.toString();
      this.auth.update_location(latitud,longitud);

    });
  }
}

 