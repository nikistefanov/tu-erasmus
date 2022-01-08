import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ICountry } from '../../../shared/models/db-models';
import { ApiService } from '../api.service';

export const COUNTRIES_API =  "/countries";

@Injectable({
    providedIn: 'root'
})
export class CountriesService extends ApiService {

    getAll(): Observable<ICountry[]> {
        return this.getInternal<ICountry[]>(COUNTRIES_API);
    }

    create(country: ICountry): Observable<ICountry> {
        return this.postInternal<ICountry>(COUNTRIES_API, {
            name: country.name,
            abbreviations: country.abbreviations
        });
    }

    delete(countryId: number | undefined) {
        return this.deleteInternal<ICountry>(`${COUNTRIES_API}/${countryId}`);
    }

    update(country: ICountry, updateCountryId: number): Observable<ICountry> {
        return this.putInternal<ICountry>(`${COUNTRIES_API}/${updateCountryId}`, {
            name: country.name,
            abbreviations: country.abbreviations
        });
    }
}
