import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Environment } from 'src/environments.ts/environments';

@Injectable({
    providedIn: 'root'
})
export class BaseService {
    public header: any;
    public path: string;
    public token: any;
    constructor(
        public readonly http: HttpClient
    ) {
        this.path = Environment.BaseURL;
        this.token = JSON.parse(localStorage.getItem('logindata'));
    }

    public initializeHeader() {
        this.header = new HttpHeaders({
            'Content-Type': 'application/json',
            'x-token': this.token.token
        });
    }



    get(url): any {
        return this.http.get(this.path + url, { headers: this.header });
    }

    getById(url, id): any {
        return this.http.get(this.path + 'consultar/' + url + id, { headers: this.header });
    }


    post(url, data) {
        const params = data;
        return this.http.post(this.path + url, params, { headers: this.header });
    }

    update(data): any {
        const params = (data);
        return this.http.put(this.path + 'actualizar', params, { headers: this.header });
    }

    delete(id) {
        return this.http.delete(this.path + 'eliminar/' + id, { headers: this.header });
    }



}
