import { IDataItem } from ".";
export interface IHomePage extends IDataItem {
    heading?: string;
    subheading?: string;
    body: string;
    hideMap?: boolean;
}
