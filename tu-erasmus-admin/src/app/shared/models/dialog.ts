import { ThemePalette } from "@angular/material/core";
import { IDataItem } from "./db-models";

export interface ICreateEditDialogData {
    label: string;
    item?: IDataItem;
}

export interface IConfirmationDialogData {
    message: string;
    buttonColor: ThemePalette;
}
