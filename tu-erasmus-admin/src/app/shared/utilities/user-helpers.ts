import { IUser } from "../models/db-models";

export function getDefaultUserValues(): IUser {
    return {
        id: 0,
        username: "",
        email: "",
        password: ""
    }
}
