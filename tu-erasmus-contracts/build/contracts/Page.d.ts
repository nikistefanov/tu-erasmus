import { IDataItem } from ".";
export interface IPage extends IDataItem {
    heading: string;
    body: string;
    toggle?: boolean;
}
