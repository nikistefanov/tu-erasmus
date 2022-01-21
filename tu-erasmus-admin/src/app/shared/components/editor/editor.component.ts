import { Component, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { AngularEditorConfig } from "@kolkov/angular-editor";

export const EDITOR_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => EditorComponent),
    multi: true
};

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    providers: [EDITOR_CONTROL_VALUE_ACCESSOR]
})
export class EditorComponent implements ControlValueAccessor {
    @Input() placeholder: string;
    @Input() editorConfig: AngularEditorConfig = {
        editable: true,
        minHeight: "300px"
    };
    _value: string;

    get htmlContent(): string {
        return this._value;
    }

    set htmlContent(val: string){
        this._value = val;

        this.onChange(val);
        this.onTouch(val);
    }

    onChange: any = () => {}
    onTouch: any = () => {}

    writeValue(value: string): void {
        this.htmlContent = value;
    }

     registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouch = fn;
    }

}
