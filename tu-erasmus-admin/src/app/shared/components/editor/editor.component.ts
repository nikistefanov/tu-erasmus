import { AfterViewInit, Component, forwardRef, Input, ViewChild } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { AngularEditorComponent, AngularEditorConfig } from "@kolkov/angular-editor";
import { DocumentsDialogComponent } from "../dialog/documents-dialog/documents-dialog.component";

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
    private self: any;

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

    constructor(private dialog: MatDialog) {}

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
        documentToolbar.innerHTML = "";
        const documentButton = button?.cloneNode(true) as HTMLElement;
        documentButton.classList.add("text-blue-700");
        const icon = documentButton.querySelector(".fa");
        const text = document.createElement("span");
        text.innerText = " Вземете линк към документ";

        if (!icon) {
            return;
        }

        icon.className = "fa fa-file";
        icon.after(text);
        documentButton.id = "insertDocumnet-";
        documentButton.title = "Insert document";
        documentButton.addEventListener("click", this.openDocumentsDialog.bind(this))

        documentToolbar.append(documentButton);
        toolbarSet.parentElement?.prepend(documentToolbar);
    }

    private openDocumentsDialog(that: any) {
        this.dialog.open(DocumentsDialogComponent, {
            panelClass: ["w-full", "md-lg:w-7/12"]
        });
    }
}
