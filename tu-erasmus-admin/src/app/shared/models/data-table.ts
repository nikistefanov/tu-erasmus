import { INamedItem } from "./db-models";

export interface IUpdateDataTable {
    item: INamedItem;
    method: UpdateDataTableMehtods;
}

export enum UpdateDataTableMehtods {
    Add,
    Delete,
    Update
}
