import { ComponentType } from "@angular/cdk/overlay";
import { MatDialog } from "@angular/material/dialog";
import { IConfirmationDialogData, ICreateEditDialogData } from "../../../../shared/models/dialog";
import { RootService } from "../../../http/root.service";

export class AdminBase {
    constructor(protected rootService: RootService,
        protected dialog: MatDialog) {}

    openDialog(dialogData: ICreateEditDialogData | IConfirmationDialogData, component: ComponentType<any>, cb: Function, updateItemId?: number) {
        const dialogRef = this.dialog.open(component, {
            data: dialogData,
            panelClass: ["w-full", "md-lg:w-7/12"]
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                cb(result, updateItemId);
            }
        });
    }
}
