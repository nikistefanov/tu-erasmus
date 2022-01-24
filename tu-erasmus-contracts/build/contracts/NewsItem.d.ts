import { INamedItem } from ".";
export interface INewsItem extends INamedItem {
    body: string;
    hide: boolean;
    created_at?: Date | string;
}
