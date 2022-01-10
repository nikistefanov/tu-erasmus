import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChange, ViewChild, ViewEncapsulation } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort, Sort } from "@angular/material/sort";
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
    @ViewChild(MatSort) sort: MatSort;
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

    announceSortChange(sortState: Sort) {
        console.log(sortState);

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

    private setupTable() {
        this.dataSource = new MatTableDataSource<IDataItem>(this.items);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.table.dataSource = this.dataSource;
    }
}
