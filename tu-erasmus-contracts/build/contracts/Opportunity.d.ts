import { ICountry } from "./Country";
import { IDataItem } from "./DataItem";
import { IPartner } from "./Partner";
export interface IOpportunity extends IDataItem {
    country: ICountry;
    partners: IPartner[];
}
