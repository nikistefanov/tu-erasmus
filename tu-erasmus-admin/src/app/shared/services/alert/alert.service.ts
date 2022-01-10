import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    durationInSeconds = 2000;

    constructor(private snackBar: MatSnackBar) { }

    public showMessage(message: string, colors: string[] = ["bg-green-500", "text-white"]) {
        this.snackBar.open(message, "", {
            duration: this.durationInSeconds,
            panelClass: colors,
            verticalPosition: "top"
        });
    }
}
