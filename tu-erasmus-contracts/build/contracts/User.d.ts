import { INamedItem } from ".";
export interface IUser extends INamedItem {
    username: string;
    email: string;
    password?: string;
    role?: IUserRole;
}
export interface IUserInfo {
    jwt: string;
    user: IUser;
}
export interface IUserRole {
    id: number;
    name: string;
    type: string;
    description: string;
}
