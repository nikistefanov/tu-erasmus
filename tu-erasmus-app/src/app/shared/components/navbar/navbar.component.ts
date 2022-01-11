import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { STICK_POSITION } from '../../constants/constants';
import { ScrollService } from '../../services/scroll.service';

@Component({
    selector: 'tu-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {
// export class NavbarComponent implements OnInit, OnDestroy {
    // sticked: boolean = false;
    // private scrollSubscription: Subscription;

    // constructor(private scrollService: ScrollService) {}

    // ngOnInit(): void {
    //     this.scrollSubscription = this.scrollService.registerScrollHandler(offset => {
    //         this.triggerScrollChanges(offset);
    //     });
    // }

    // ngOnDestroy(): void {
    //     this.scrollSubscription.unsubscribe();
    // }

    // private triggerScrollChanges(scrollOffset: number) {
    //     if (scrollOffset > STICK_POSITION) {
    //         this.sticked = true;
    //     } else {
    //         this.sticked = false;
    //     }
    // }
}
