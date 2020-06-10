import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneralService } from './general.service';
import { BaseService } from './baseService';

@Injectable({
    providedIn: 'root'
})
export class UserService extends BaseService {
    public url: string;
    constructor(
        public readonly http: HttpClient
    ) {
        super(http);
        this.url = 'url';
    }


    getUsers(): any {
        return this.get('user/getUser');
    }

    getUsersById(id): any {
        return this.getById(this.url, id);
    }

   postUser(user): any {
        return this.post('user/create', user);
    }

    login(user): any {
        return this.post('user/login', user);
    }

}
