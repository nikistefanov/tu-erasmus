import { formatDate } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "tuDataTableCell",
})
export class DataTableFormatCellPipe implements PipeTransform {
    transform(value: string) {
        if (value === null || value === undefined) {
            return value;
        }

        const date = new Date(value);

        if (typeof(value) === "boolean") {
            value = value ? "Да" : "Не";
        } else if (date.getDate()) {
            value = this.handleDate(value);
        }

        return value;
    }

    private handleDate(value: string): string {
        return formatDate(value, "dd.MM.yyyy", "bg-BG");
    }

    private isValidDate(value: Date) {
        return value instanceof Date;
      }
}
