import { AfterViewInit, Component, ElementRef, forwardRef, Input, ViewChild } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { AngularEditorComponent, AngularEditorConfig } from "@kolkov/angular-editor";

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
export class EditorComponent implements ControlValueAccessor, AfterViewInit {
    @Input() placeholder: string;
    @Input() editorConfig: AngularEditorConfig = {
        editable: true,
        minHeight: "300px"
    };
    @ViewChild("editor") editor: AngularEditorComponent;

    private _value: string;

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

    // constructor(
    //     public dialogRef: MatDialogRef<ConfirmComponent>,
    //     @Inject(MAT_DIALOG_DATA) public data: IConfirmationDialogData
    // ) {
    //     this.dialogData = data;
    // }

    writeValue(value: string): void {
        this.htmlContent = value;
    }

     registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouch = fn;
    }

    ngAfterViewInit(): void {
        if (!this.editor) {
            return;
        }

        this.insertCustomButton(this.editor.editorToolbar["er"].nativeElement);
    }

    private insertCustomButton(toolbar: HTMLElement) {
        const toolbarSet = toolbar.querySelector(".angular-editor-toolbar-set") as HTMLElement;

        if (!toolbarSet) {
            return;
        }

        const button = toolbarSet.firstElementChild;
        const documentToolbar = toolbarSet.cloneNode(true) as HTMLElement;
        const documentButton = button?.cloneNode(true) as HTMLElement;
        const icon = documentButton.querySelector(".fa");
        const text = document.createElement("span");
        text.innerText = "Вземете линк към документ";

        if (!icon) {
            return;
        }

        icon.className = "fa fa-file";
        icon.after(text);
        documentButton.id = "insertDocumnet-";
        documentButton.title = "Insert document";
        documentButton.addEventListener("click", this.openDocumentsDialog)

        documentToolbar.append(documentButton);
        toolbarSet.before(documentToolbar);
    }

    private openDocumentsDialog() {

    }
}
