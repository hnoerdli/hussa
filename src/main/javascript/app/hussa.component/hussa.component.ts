import { Component, OnInit } from '@angular/core';
import {HttpModule} from '@angular/http';
import {Common, Coordinate, Resort} from "../common/common";
import {ServerService} from "../service/server.service";

@Component({
    selector: 'hussa',
    templateUrl: 'app/hussa.component/hussa.component.html',
    styleUrls: ['app/hussa.component/hussa.component.css'],
    providers: [ServerService, HttpModule]
})

export class HussaComponent implements OnInit {


    constructor(private _service: ServerService) {}

    resorts: Array<Resort> = [
        new Resort(new Coordinate(39.8855619, -105.7619686), "Winter Park")
    ];

    loadResortList(position): void {
        if (this) {
          this._service.getCloseResorts(position);
        } else {
          console.info('no this ;(');
        }

    }


    displayMyCoords(position): void {
      //it would appear we don't have an instance??
      if (this) {
        console.log('instance!');
      } else {
        console.log('no instance?');
      }
      //window.alert("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
    }

    ngOnInit(): void {
      if (navigator.geolocation) {
         console.info('ngOnInit: this? ' + this);
         navigator.geolocation.getCurrentPosition(this.loadResortList);
         //navigator.geolocation.getCurrentPosition(this.displayMyCoords);
       }
    }

}
