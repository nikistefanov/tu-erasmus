import { ICountry } from "../models/db-models"

export function getEmptyCountryValues(): ICountry {
    return {
        id: undefined,
        name: undefined,
        abbreviations: undefined
    }
}

export const CONTACTS_HEADERS_MAP = [
    "First name",
    "Surname",
    "Date of birth",
    "Address",
    "Phone number",
    "IBAN",
    "Action"
]

export const CONTACTS_COLUMNS_MAP = [
    "firstName",
    "surname",
    "DOB",
    "address",
    "phoneNumber",
    "IBAN",
    "actions"
]
