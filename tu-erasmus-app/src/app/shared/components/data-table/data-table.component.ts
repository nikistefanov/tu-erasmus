import { AfterViewInit, Component, EventEmitter, Input, Output, SimpleChanges, ViewChild, ViewEncapsulation } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort, Sort } from "@angular/material/sort";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { INamedItem, IUniversity } from "../../models/db-models";

@Component({
    selector: "app-data-table",
    templateUrl: "./data-table.component.html",
    styleUrls: ["./data-table.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class DataTableComponent implements AfterViewInit {
    @Input() title!: string;
    @Input() items: INamedItem[] = [];
    @Input() dataHeaders: string[] = [];
    @Input() dataColumns: string[] = [];
    @Input() loading: boolean = false;

    @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatTable, { static: false }) table!: MatTable<INamedItem>;

    public expandedItem!: INamedItem | null;
    public dataSource!: MatTableDataSource<INamedItem>;

    private searchedItems: INamedItem[] = [];

    ngOnChanges(changes: SimpleChanges) {
        if (changes["items"] && changes["items"].currentValue && changes["items"].currentValue.length > 0) {
            this.dataSource.data = changes["items"].currentValue
        }
    }

    ngAfterViewInit() {
        this.setupTable();
    }

    announceSortChange(sortState: any) {
        console.log(sortState);

    }

    onSearch(val: any) {
        if (val === "") {
            this.dataSource.data = this.items;

            return;
        }

        this.searchedItems = this.items.filter(x => x.name.toLowerCase().indexOf(val) > -1);
        this.dataSource.data = this.searchedItems;
    }

    handleClick(item: INamedItem) {
        this.expandedItem = this.expandedItem === item ? null : item;

        this.onClick.emit(item);
    }

    private setupTable() {
        this.dataSource = new MatTableDataSource<INamedItem>(this.items);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.table.dataSource = this.dataSource;
    }
}
