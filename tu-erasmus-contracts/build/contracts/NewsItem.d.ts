import { IDataItem } from "./DataItem";
export interface INewsItem extends IDataItem {
    title: string;
    body: string;
    hide: boolean;
    created_at?: Date | string;
}
