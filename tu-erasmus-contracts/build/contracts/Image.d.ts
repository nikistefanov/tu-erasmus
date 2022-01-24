import { INamedItem } from ".";
export interface IImage extends INamedItem {
    url: string;
    size: number;
    ext: string;
}
