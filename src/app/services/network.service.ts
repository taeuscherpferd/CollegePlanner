import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { INetworkService } from '../interfaces/services/network-service.interface';
import { HttpHeaders } from '@angular/common/http';

const headerDict = {
  'Access-Control-Allow-Origins': '*',
}

const requestOptions = {
  headers: new HttpHeaders(headerDict),
};

@Injectable()
export class NetworkService implements INetworkService  {

    constructor(private http: HttpClient) {}

    async get(url) : Promise<any> {
        const resp = await this.http.get<any>(url).toPromise().catch((err: HttpErrorResponse) => {
            console.error('An error occurred (NetworkService.get()):', err.error);
        });
        return resp;
    }

}
