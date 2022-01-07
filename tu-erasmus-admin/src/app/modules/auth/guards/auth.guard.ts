import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { RoutePaths } from '../../../shared/constants/route-paths';
import { AuthService } from '../auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate() {
        if (this.authService.isLogged) {
            return true;
        }

        this.router.navigateByUrl(RoutePaths.Login);
        return false
    }

}
