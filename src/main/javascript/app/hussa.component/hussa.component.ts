import {Component} from '@angular/core';

@Component({
    selector: 'hussa',
    templateUrl: 'app/hussa.component/hussa.component.html',
    styleUrls: ['app/hussa.component/hussa.component.css'],
})
export class HussaComponent {
    resorts: Array<Resort> = [
        new Resort(39.8855619, -105.7619686, "Winter Park", "CO")

    ];

}

export class Resort {

   lat: number;
   lon: number;
   name: string;

   constructor(lat: number, lon: number, name: string ) {
    //super(); /* that shit ain't defined */
    this.lat = lat;
    this.long = lon;
    this.name = name;

   }

}