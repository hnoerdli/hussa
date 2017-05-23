import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import {Common, Coordinate, Resort} from "../common/common";

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

    private extractData(res: Response) {
      let body = res.json();
      return body || { };
    }

    getProximityResorts(position: Position): Observable<Resort[]> {
        return this.http.get(this.Server.GETResortProximity
                + '?lat=' + position.coords.latitude +'&lon=' + position.coords.longitude + '&unit=10&distance=100')
                  .map(this.extractData)
                  .catch(this.handleError);
    }

    private handleError (error: Response | any) {
     let errMsg: string;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
    }

}