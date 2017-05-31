import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/RX';


@Injectable()
export class TravelService {
    constructor(
        private http: Http
    ) { }

    getTravel(): Observable<any[]>{
        return this.http.get('http://angular2api2.azurewebsites.net/api/internships/')
            .map((res: Response) => {
                console.log(res);
                return res.json();
        });
    }

    postTravel(travel):Observable<any> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers});
        let body = JSON.stringify(travel);
        console.log("in post!");
        return this.http.post('http://angular2api2.azurewebsites.net/api/internships/', body, headers).map((res: Response) => res.json());
    } 

}