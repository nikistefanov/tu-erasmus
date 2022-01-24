import { INamedItem } from ".";

export interface IDocument extends INamedItem {
    url: string;
    size: number;
    ext: string;
}