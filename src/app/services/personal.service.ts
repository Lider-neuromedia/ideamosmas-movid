import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { GLOBAL } from './global';
import { User } from '../models/user';
import { Otp } from '../models/otp';


@Injectable()
export class PersonalService{
    public url: string;

    constructor(public _http: HttpClient){
        this.url = GLOBAL.url;
    }

    registerOtp(otp: Otp){
        const headers = new HttpHeaders( {'Content-Type':'application/json'} );
        return this._http.post(`${this.url}/register/otp/email`, otp, {headers: headers});
    }

    registerUserPersonal(user: User){
        const headers = new HttpHeaders( {'Content-Type':'application/json'} );
        return this._http.put(`${this.url}/register/otp`, user, {headers:headers});
    }
}




