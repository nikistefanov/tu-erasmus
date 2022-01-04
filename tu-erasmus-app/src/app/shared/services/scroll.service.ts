import { Injectable, } from "@angular/core";
import { Subscription } from "rxjs";
import { fromEvent, Observable, Subject } from "rxjs";
import { map, share } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class ScrollService {
    private readonly onScroll$: Observable<number>;

    private readonly scrollCompleted$: Subject<void> = new Subject<void>();

    constructor() {
        this.onScroll$ = fromEvent(window, "scroll").pipe(
            map(() => window.scrollY || document.documentElement.scrollTop),
            share()
        );
    }

    registerScrollHandler(handler: IScrollHandler): Subscription {
        return this.onScroll$.subscribe(handler);
    }

    scrollToTop(shouldAnimate: boolean = true, durationMS: number = SCROLL_DURATION) {
        if (shouldAnimate) {
            this.scrollToPoint(0, durationMS);
        } else if (window.pageYOffset > 0) {
            window.scrollTo(0, 0);
            this.scrollCompleted$.next();
        }
    }

    scrollToPoint(point: number, durationMS: number = SCROLL_DURATION) {
        // If start scroll distance is 0 and end scroll distance is 1 => the scroll speed is the end scroll distance devided by the scroll duration.
        const scrollSpeed = SCROLL_DISTANCE.END / durationMS;
        const documentElement = window.document.documentElement.scrollTop || window.document.documentElement.scrollTop === 0 ? window.document.documentElement : window.document.body;

        this.scrollElementToPoint(documentElement, documentElement.scrollTop, point, scrollSpeed);
    }

    private scrollElementToPoint(element: HTMLElement, from: number, to: number, speed: number, distance: number = SCROLL_DISTANCE.START) {
        if (distance < 0 || distance > 1) {
            element.scrollTop = to;
            this.scrollCompleted$.next();
            return;
        }
        element.scrollTop = from - (from - to) * this.easeOutMotion(distance);
        distance += speed * SCROLL_STEP_DELAY;

        window.setTimeout(() => {
            this.scrollElementToPoint(element, from, to, speed, distance);
        }, SCROLL_STEP_DELAY);
    }

    // Ease-out scrolling motion. This is easing function to slow down scrolling at the end. Decelerating to zero velocity.
    private easeOutMotion(distance: number): number {
        distance--;
        return distance * distance * distance + 1;
    }
}

export const TOOLBAR_VISIBLE_OFFSET = 30;
export const ACTION_BUTTONS_OFFSET = 200;

// the offset is used in order not to stick the field to the very top of the viewport
const SCROLL_DURATION = 250;
const SCROLL_STEP_DELAY = 25;
const SCROLL_DISTANCE = {
    START: 0,
    END: 1
};

export type IScrollHandler = (offset: number) => void;
