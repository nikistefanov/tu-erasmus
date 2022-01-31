import { Injectable } from '@angular/core';
import { IUser, IUserInfo } from '../../shared/models/db-models';
import { StorageService } from '../../shared/services/storage/storage.service';
import { convertUnixToDate, decodeToken } from '../../shared/utilities/token-helpers';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { StorageKeys } from '../../shared/constants/storage';
import { API_BASE } from '../../shared/constants/constants';

export const AUTH_LOGIN = `${API_BASE}/auth/local`;
export const AUTH_REGISTER = `${AUTH_LOGIN}/register`;
export const USERS = `${API_BASE}/users`;
export const PASSWORD = `${API_BASE}/password`;

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    get isLogged(): boolean {
        const user: IUserInfo = this.getUserInfo();

        return !!user && this.hasActiveToken(user.jwt);
    }

    constructor(private storageService: StorageService, private http: HttpClient) { }

    getAll(): Observable<IUser[]> {
        return this.http.get<IUser[]>(USERS, {
            headers: this.getHeaders()
        });
    }

    register(user: IUser): Observable<IUserInfo> {
        return this.http.post<IUserInfo>(AUTH_REGISTER, {
            username: user.username,
            email: user.email,
            password: user.password,
        });
    }

    login(user: IUser): Observable<IUserInfo> {
        return this.http.post<IUserInfo>(AUTH_LOGIN, {
            identifier: user.username,
            password: user.password,
        });
    }

    logout(): Observable<boolean> {
        this.storageService.deleteItem(StorageKeys.User);

        return of(true);
    }

    delete(userId: number | undefined) {
        return this.http.delete<IUserInfo>(`${USERS}/${userId}`, {
            headers: this.getHeaders()
        });
    }

    changePassword(username: string, password: string, newPassword: string) {
        return this.http.post<IUserInfo>(`${PASSWORD}`, {
            identifier: username,
            password: password,
            newPassword: newPassword,
            confirmPassword: newPassword
        }, {
            headers: this.getHeaders()
        });
    }

    getUserInfo(): IUserInfo {
        return this.storageService.getItem<IUserInfo>(StorageKeys.User);
    }

    private hasActiveToken(token: string): boolean {
        if (!token) {
            return false;
        }

        const decodedToken = decodeToken(token);
        const expirationDate = convertUnixToDate(decodedToken.exp);
        const currentDate = new Date();

        return expirationDate >= currentDate;
    }

    private getHeaders(): HttpHeaders {
        const user = this.getUserInfo();
        const token = user ? user.jwt : null;
        const headers = new HttpHeaders(token ? {"Authorization": `Bearer ${token}`} : {});

        return headers;
    }
}
