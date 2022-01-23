import { Component, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

export const FILE_UPLOAD_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FileUploadComponent),
    multi: true
};

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    providers: [FILE_UPLOAD_CONTROL_VALUE_ACCESSOR]
})
export class FileUploadComponent implements ControlValueAccessor {
    @Input() label: string = "Избери файл";
    @Input() acceptedTypes: string;

    fileName: string;
    private _file: File;

    get file(): File {
        return this._file;
    }

    set file(val: File) {
        this._file = val;

        this.onChange(val);
        this.onTouch(val);
    }

    onChange: any = () => { }
    onTouch: any = () => { }

    writeValue(value: File): void {
        this.file = value;
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouch = fn;
    }

    handleChange(event: any) {
        const files = event.addedFiles || event.target.files;

        if (files && files.length > 0) {
            this.fileName = files[0].name;
            this.file = files[0];
        }
    }

}
