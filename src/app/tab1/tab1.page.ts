import { Component } from '@angular/core';
//import {
//  GoogleMaps,
//  GoogleMap,
//  GoogleMapsEvent,
//  GoogleMapOptions,
//  CameraPosition,
//  MarkerOptions,
//  Marker,
//  LatLng
//} from '@ionic-native/google-maps';
import { NavController, IonApp } from '@ionic/angular';
import { IonicNativePlugin } from '@ionic-native/core';
import { element } from 'protractor';
///import { Geolocation,Geoposition } from '@ionic-native/geolocation/ngx'
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 
  //map: GoogleMap;
 
  constructor(
    public navCtrl: NavController,
 //  public geolocation: Geolocation,   
//    private googleMaps: GoogleMaps,
  ) {}
 // ngAfterViewInit(){
//    this.geolocationNative();
//  }

//  geolocationNative()
//  {
 //   this.geolocation.getCurrentPosition().then((geposition:Geoposition) =>{
   //   console.log(geposition);
    //  this.loadMap(geposition);
//  })
// }
//  loadMap(position){
 //   let element: HTMLElement = document.getElementById('map');
  //  let map: GoogleMap = this.googleMaps.create(element);
  //  let latlng = new LatLng(position.coords.latitude, position.coords.longitude);

  //  map.one(GoogleMapsEvent.MAP_READY).then(() =>{

  //    let cameraPosition = {
  //      target: latlng,
  //      zoom: 17
        
   //   };
  //    map.animateCamera(cameraPosition);
      
   //   let markerOptions: MarkerOptions = {
    ///    position: latlng,
     //   icon: "assets/images/favicon.jpg",
     //   title: 'Our first POI'
    //  };
  //  })
 // }
}
  

