import { INamedItem, IUser } from "./db-models";

export interface IUpdateDataTable {
    item: INamedItem | IUser;
    method: UpdateDataTableMehtods;
}

export enum UpdateDataTableMehtods {
    Add,
    Delete,
    Update
}
