import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { IFFurnitureData } from '../Interface/furnitureData.interface';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class FurnitureEntityService {

    url = 'http://localhost:3001/';
    constructor(private http: HttpClient, private router: Router) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    /* CALLING API FOR GETTING FURNITURE DETAILS */
    getFurnitureDetails() {
        return this.http.get(this.url + 'furniture');
    }

    getFurnitureDetailsID(id: any) {
        return this.http.get(this.url + 'furniture/' + id);
    }
}
