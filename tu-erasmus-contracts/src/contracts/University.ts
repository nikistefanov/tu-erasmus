import { IDataItem } from ".";

export interface IUniversity extends IDataItem {
    name: string;
    countryName: string;
    description?: string;
    website?: string;
}