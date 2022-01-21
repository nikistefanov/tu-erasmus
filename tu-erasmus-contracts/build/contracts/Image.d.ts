import { IDataItem } from "./DataItem";
export interface IImage extends IDataItem {
    name: string;
    url: string;
    size: number;
    ext: string;
}
