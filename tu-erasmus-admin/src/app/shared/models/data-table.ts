import { IDataItem } from "./db-models";

export interface IUpdateDataTable {
    item: IDataItem;
    method: UpdateDataTableMehtods;
}

export enum UpdateDataTableMehtods {
    Add,
    Delete,
    Update
}
