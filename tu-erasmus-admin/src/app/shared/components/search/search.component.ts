import { Component, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

export const SEARCH_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SearchComponent),
    multi: true
};

@Component({
    selector: "app-search",
    templateUrl: "./search.component.html",
    providers: [SEARCH_CONTROL_VALUE_ACCESSOR]
})
export class SearchComponent implements ControlValueAccessor {
    private _value: File;

    get value(): File {
        return this._value;
    }

    set value(val: File) {
        this._value = val;

        this.onChange(val);
        this.onTouch(val);
    }

    onChange: any = () => { }
    onTouch: any = () => { }

    writeValue(value: File): void {
        this.value = value;
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouch = fn;
    }
}
