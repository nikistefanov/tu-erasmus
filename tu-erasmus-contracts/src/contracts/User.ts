import { IDataItem } from "./DataItem";

export interface IUser extends IDataItem {
    username: string;
    email: string;
    password?: string;
}

export interface IUserInfo {
    jwt: string;
    user: IUser;
}