import { IDataItem } from ".";
export interface IUniversity extends IDataItem {
    name: string;
    countryName: string;
    track?: string;
    mobility?: string;
    description?: string;
    website?: string;
}
