import { IDataItem } from "./DataItem";
export interface ICountry extends IDataItem {
    name?: string;
    abbreviations?: string;
}