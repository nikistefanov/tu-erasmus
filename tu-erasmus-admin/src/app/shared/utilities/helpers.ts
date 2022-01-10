import { IUniversity } from "../models/db-models"

export function getEmptyUniversityValues(): IUniversity {
    return {
        id: undefined,
        name: undefined,
        description: undefined
    }
}
