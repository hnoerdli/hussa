import {Component, OnInit} from '@angular/core';
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
    errorMessage: string;
    resorts: Array<Resort>;

    goGoGeo(): void {
        navigator.geolocation.getCurrentPosition((position) => {
          this._service.getProximityResorts(position).subscribe(
                     resorts => this.resorts = resorts,
                     error =>  this.errorMessage = <any>error);
        });
    }

    ngOnInit(): void {
       this.goGoGeo();
    }

}
