import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ApiService } from './api.service';
import { CountriesService } from './services/countries.service';

@Injectable({
    providedIn: 'root'
})
export class RootService extends ApiService {
    countries: CountriesService;

    constructor(http: HttpClient, auth: AuthService) {
        super(http, auth);

        this.countries = new CountriesService(http, auth);
    }
}
