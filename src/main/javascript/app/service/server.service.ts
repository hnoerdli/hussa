import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ServerService {
    constructor(private http: Http) {}

    private Server = {
        GETRandomNumber: '/get-random-number',
        GETResortProximity: '/resort-proximity'
    };

    getRandomNumber(): Observable<number> {
        return this.http.get(this.Server.GETRandomNumber)
            .map(res => <number> res.json())
            .catch(error => Observable.throw(error.json().error || 'Server error'))
    }

    getCloseResorts(position: Position): Observable<number> {

        return this.http.get(this.Server.GETResortProximity + '/?lat=${position.coords.latitude }&lon=-105.150081&unit=10&distance=100')
            .map(res => <number> res.json())
            .catch(error => Observable.throw(error.json().error || 'Server error'))
    }

}