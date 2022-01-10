import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE } from '../../shared/constants/api';

const API_URL = API_BASE;
const NO_LIMIT_PARAM = {"_limit": -1};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    constructor(private readonly http: HttpClient) {
    }

    protected getInternal<T>(relativeUrl: string, queryParams: { [key: string]: string | string[] | number | undefined } = {}): Observable<T> {
        const modifiedParams = Object.assign(NO_LIMIT_PARAM, queryParams);
        const params = this.mapToHttpParams(modifiedParams);

        return this.http.get<T>(`${API_URL}${relativeUrl}`, {
            params
        });
    }

    private mapToHttpParams(queryParams: { [key: string]: string | string[] | number | number[] | undefined } = {}): HttpParams | undefined {
        const keys = Object.keys(queryParams);
        if (keys.length === 0) {
            return undefined;
        }

        const params: { [key: string]: string } = {};
        keys.forEach(k => {
            const value = queryParams[k];
            if (value !== undefined) {
                params[k] = Array.isArray(value) ? value.join(",") : value.toString();
            }
        });

        return new HttpParams({ fromObject: params });
    }
}
