import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy{
  
  map: Leaflet.Map;

  constructor( private geolocation: Geolocation) {}

  Var_latitude: any;
  Var_longitude: any;

  resultado() {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        console.log(resp.coords.latitude);
        console.log(resp.coords.longitude);

        this.leafletMap(resp.coords.latitude,resp.coords.longitude)
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });
  }

  ngOnInit() {}

  ionViewDidEnter() 
  { 
    this.resultado();     
  }


  leafletMap(lat,long) {
    this.map = Leaflet.map('mapId', {
      center: [lat,  long],
      zoom: 17
    })

    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'OpenStreetMap.org',
    }).addTo(this.map);

    const ondeestou = Leaflet.icon({
      iconUrl: '../../assets/ondeestou.png',
      iconSize: [38, 52],
      iconAnchor: [20, 40], 
      popupAnchor: [-3, -40]
    });

    Leaflet.marker({ lat: 39.9593458, lng: -105.5122808 }, { icon: ondeestou, draggable: true }).addTo(this.map).bindPopup('Hi!');


    
    const options = {
      radius: 300,
      color: 'red',
      fillColor: 'red',
      fillOpacity: 0.2
    }

    Leaflet.circle({ lat: -23.9700323, lng:  -46.3159908 }, options).addTo(this.map);
  }



  ngOnDestroy() {
    this.map.remove();
  }

}
