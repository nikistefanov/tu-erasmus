import { Component, EventEmitter, forwardRef, Output } from "@angular/core";
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
    @Output() onSearch: EventEmitter<string> = new EventEmitter();
    @Output() onClear: EventEmitter<any> = new EventEmitter();

    private _value: string = "";

    get value(): string {
        return this._value;
    }

    set value(val: string) {
        this._value = val;

        this.onChange(val);
        this.onTouch(val);
    }

    onChange: any = () => { }
    onTouch: any = () => { }

    writeValue(value: string): void {
        this.value = value;
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouch = fn;
    }

    handleSearch() {
        this.onSearch.emit(this.value);
    }

    handleClear() {
        this.value = "";

        this.onClear.emit();
    }
}
