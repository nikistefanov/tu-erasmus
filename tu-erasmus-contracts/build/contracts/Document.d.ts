import { IDataItem } from "./DataItem";
export interface IDocument extends IDataItem {
    name: string;
    url: string;
    size: number;
    ext: string;
}
