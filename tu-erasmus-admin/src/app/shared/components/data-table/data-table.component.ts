import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChange, ViewChild, ViewEncapsulation } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { BehaviorSubject, Observable, ReplaySubject, Subscription } from "rxjs";
import { IUpdateDataTable, UpdateDataTableMehtods } from "../../models/data-table";
import { IDataItem, IUserInfo } from "../../models/db-models";
import { ErrorHandlerService } from "../../services/error-handler/error-handler.service";

@Component({
    selector: "app-data-table",
    templateUrl: "./data-table.component.html",
    styleUrls: ["./data-table.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class DataTableComponent implements OnInit, OnDestroy, AfterViewInit {
    @Input() title!: string;
    @Input() label!: string;
    @Input() items: IDataItem[] = [];
    @Input() dataHeaders: string[] = [];
    @Input() dataColumns: string[] = [];
    @Input() hasAction: boolean = false;
    @Input() loading: boolean = false;
    @Input() update$: ReplaySubject<IUpdateDataTable> = new ReplaySubject<IUpdateDataTable>();
    @Input() items$!: Observable<IDataItem[]>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatTable, { static: false }) table!: MatTable<IDataItem>;

    @Output() onUpdateItem: EventEmitter<any> = new EventEmitter<any>();
    @Output() onCreateItem: EventEmitter<any> = new EventEmitter<any>();
    @Output() onDeleteItem: EventEmitter<any> = new EventEmitter<any>();

    public userInfo!: IUserInfo;
    public expandedItem!: IDataItem;
    public dataSource!: MatTableDataSource<IDataItem>;

    private refreshSub: Subscription = new Subscription();

    constructor(private dialog: MatDialog, private errorHandler: ErrorHandlerService) {}

    ngOnChanges(changes: any) {
        if (changes["items"] && changes["items"].currentValue && changes["items"].currentValue.length > 0) {
            this.dataSource.data = changes["items"].currentValue
        }
    }

    ngOnInit() {
        if (this.hasAction) {
            this.dataHeaders.push("Опции");
            this.dataColumns.push("actions");
        }

        this.label = `Създай ${this.label}`;
        this.refreshSub = this.update$.subscribe((data) => {
            this.handleUpdateTable(data);
        });
    }

    ngOnDestroy(): void {
        this.refreshSub.unsubscribe();
    }

    ngAfterViewInit() {
        this.setupTable();
    }

    deleteItem(event: Event, item: IDataItem) {
        event.stopImmediatePropagation();

        this.onDeleteItem.emit(item);
    }

    updateItem(event: Event, item: IDataItem) {
        event.stopImmediatePropagation();

        this.onUpdateItem.emit(item);
    }

    createItem() {
        this.onCreateItem.emit();
    }

    private handleUpdateTable(data: IUpdateDataTable) {
        switch (data.method) {
            case UpdateDataTableMehtods.Add:
                this.items.push(data.item);
            break;
            case UpdateDataTableMehtods.Delete:
                this.items.splice(this.items.findIndex(i => i.id === data.item.id), 1);
            break;
            case UpdateDataTableMehtods.Update:
                const index = this.items.findIndex(c => c.id === data.item.id);
                this.items[index] = data.item;
            break;
        }

        this.dataSource.data = this.items;

        if (data.method === UpdateDataTableMehtods.Add) {
            this.paginator.lastPage();
        }
    }

    // onDelete(event: Event, contact: IContact) {
    //     event.stopImmediatePropagation();
    //     const data: IConfirmationDialogData = {
    //         message: `Are you sure want to delete <b class="whitespace-nowrap">${contact.firstName} ${contact.surname}</b> from your contact list`,
    //         buttonColor: "warn"
    //     }
    //     this.openDialog(data, ConfirmComponent, this.deleteContact.bind(this, contact));
    // }

    // onUpdateContact(event: Event, contact: IContact) {
    //     event.stopImmediatePropagation();
    //     const contactData = Object.assign({}, contact);
    //     this.openDialog({ label: "Update", contact: contactData }, ContactCreateComponent, this.updateContact.bind(this), contactData.id);
    // }

    // onCreateContact() {
    //     this.openDialog({ label: "Create" }, ContactCreateComponent, this.createContact.bind(this))
    // }

    // private deleteContact(contact: IContact) {
    //     this.rootService.contacts.delete(contact.id).pipe(
    //         first()
    //     ).subscribe((resp: IContact) => {
    //         this.contacts.splice(this.contacts.findIndex(i => i.id === resp.id), 1);
    //         this.dataSource.data = this.contacts;
    //     });
    // }

    // private openDialog(dialogData: IContactCreateDialogData | IConfirmationDialogData, component: ComponentType<ContactCreateComponent | ConfirmComponent>, cb: Function, updateContactId?: number) {
    //     const dialogRef = this.dialog.open(component, {
    //         data: dialogData,
    //         panelClass: ["w-full", "md-lg:w-7/12"]
    //     });

    //     dialogRef.afterClosed().subscribe(result => {
    //         if (result) {
    //             cb(result, updateContactId);
    //         }
    //     });
    // }

    // private updateContact(contact: IContact, updateContactId: number) {
    //     this.rootService.contacts.update(contact, updateContactId, this.userInfo.user.id).pipe(
    //         first()
    //     ).subscribe({
    //         next: (resp: IContact) => {
    //             const index = this.contacts.findIndex(c => c.id === resp.id);
    //             this.contacts[index] = resp;
    //             this.dataSource.data = this.contacts;
    //         },
    //         error: error => this.errorHandler.handleError(error)
    //     });
    // }

    // private createContact(contact: IContact) {
    //     this.rootService.contacts.create(contact, this.userInfo.user.id).pipe(
    //         first()
    //     ).subscribe({
    //         next: (resp: IContact) => {
    //             this.contacts.push(resp);
    //             this.dataSource.data = this.contacts;
    //             this.paginator.lastPage();
    //         },
    //         error: error => this.errorHandler.handleError(error)
    //     });
    // }

    private setupTable() {
        this.dataSource = new MatTableDataSource<IDataItem>(this.items);
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    }
}
