import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'tu-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {
    @ViewChild("links") links: ElementRef;

    isOpen: boolean = false;

    private documentListener: EventListener;

    onNavbarOpen(event: Event) {
        event.stopPropagation();

        this.handleNavbarState(!this.isOpen);
    }

    private handleNavbarState(newState: boolean) {
        this.isOpen = newState;

        document.body.classList.toggle("-nav-open", this.isOpen);

        if (this.isOpen) {
            this.documentListener = evt => this.handleDocumentListener(evt);
            document.addEventListener("click", this.documentListener);
        } else {
            document.removeEventListener("click", this.documentListener);
        }
    }

    private handleDocumentListener(event: Event) {
        const target = event.target as HTMLElement;
        const newState = this.links.nativeElement.contains(target) && target.nodeName !== "A";

        this.handleNavbarState(newState);
    }
}
