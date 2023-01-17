import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first, Subscription } from 'rxjs';
import { AuthService } from '../../../modules/auth/auth.service';
import { STICK_POSITION } from '../../constants/constants';
import { RoutePaths } from '../../constants/route-paths';
import { IUserInfo } from '../../models/db-models';
import { ScrollService } from '../../services/scroll/scroll.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit, OnDestroy {
    sticked: boolean = false;
    isLoading: boolean = false;
    userInfo: IUserInfo;

    private scrollSubscription: Subscription;

    constructor(private scrollService: ScrollService, public authService: AuthService, private router: Router) {}

    ngOnInit(): void {
        this.scrollSubscription = this.scrollService.registerScrollHandler(offset => {
            this.triggerScrollChanges(offset);
        });
    }

    ngOnDestroy(): void {
        this.scrollSubscription.unsubscribe();
    }

    onMenuOpen() {
        if (! this.userInfo) {
            this.userInfo = this.authService.getUserInfo();
        }
    }

    private triggerScrollChanges(scrollOffset: number) {
        if (scrollOffset > STICK_POSITION) {
            this.sticked = true;
        } else {
            this.sticked = false;
        }
    }

    logout() {
        this.isLoading = true;

        this.authService.logout().pipe(
            first()
        ).subscribe({
            next: () => {
                this.router.navigateByUrl(RoutePaths.Empty);
                this.isLoading = false;
            },
            error: () => this.isLoading = false
        });
    }
}
