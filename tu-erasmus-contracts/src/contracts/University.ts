import { INamedItem } from ".";

export interface IUniversity extends INamedItem {
    countryName: string;
    track?: string;
    mobility?: string;
    description?: string;
    website?: string;
}