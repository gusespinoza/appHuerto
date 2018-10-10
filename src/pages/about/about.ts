import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  ubicacion_actual: { lat: number, lng: number} = {
    lat: 51.673858,
    lng: 7.815982
  };
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(public navCtrl: NavController, private plat: Platform,
  		public geolocation: Geolocation) {

  	  this.plat.ready().then( ()=> {
      	this.geolocation.getCurrentPosition().then( resp=>{

	        this.ubicacion_actual.lat = resp.coords.latitude;
	        this.ubicacion_actual.lng = resp.coords.longitude;

	        console.log(resp);

      });



    });
  }


  obtienePosicion($event){
    console.log($event);

    this.ubicacion_actual.lat = $event.coords.lat;
    this.ubicacion_actual.lng = $event.coords.lng;

  }

  convertStringToNumber(value: string): number {
    return +value;
  }

}
