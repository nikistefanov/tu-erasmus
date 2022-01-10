import { IDataItem } from ".";
export interface IAdminHome extends IDataItem {
    heading?: string;
    subheading?: string;
    body: string;
    hideMap?: boolean;
}
