import { ICountry } from "./Country";
import { IDataItem } from "./DataItem";
import { IPartner } from "./Partner";

export interface ICall extends IDataItem {
    country: ICountry;
    partners: IPartner[];
}