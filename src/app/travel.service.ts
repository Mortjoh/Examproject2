import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

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

}