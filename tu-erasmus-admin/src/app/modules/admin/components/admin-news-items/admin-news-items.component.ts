import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { first, ReplaySubject } from 'rxjs';
import { ConfirmComponent } from '../../../../shared/components/dialog/confirm/confirm.component';
import { IUpdateDataTable, UpdateDataTableMehtods } from '../../../../shared/models/data-table';
import { INewsItem } from '../../../../shared/models/db-models';
import { IConfirmationDialogData } from '../../../../shared/models/dialog';
import { AlertService } from '../../../../shared/services/alert/alert.service';
import { ErrorHandlerService } from '../../../../shared/services/error-handler/error-handler.service';
import { RootService } from '../../../http/root.service';
import { AdminBase } from '../base/admin-base';
import { AdminNewsItemsCreateEditComponent } from './admin-news-items-create-edit.component';

@Component({
    selector: 'app-admin-news-items',
    templateUrl: './admin-news-items.component.html',
})
export class AdminNewsItemsComponent extends AdminBase {
    headers = [
        "Заглавие",
        "Създадена на",
        "Скрита"
    ]

    columns = [
        "title",
        "created_at",
        "hide"
    ];
    newsItems: INewsItem[] = [];
    update$: ReplaySubject<IUpdateDataTable> = new ReplaySubject<IUpdateDataTable>();
    loading: boolean = true;


    constructor(rootService: RootService,
        dialog: MatDialog,
        private errorHandler: ErrorHandlerService,
        private alertService: AlertService) {
        super(rootService, dialog)
        this.fetchData();
    }

    handleUpdateNewsItem(newsItem: INewsItem) {
        const universityData = Object.assign({}, newsItem);
        this.openDialog({ label: "Промяна на новина", item: universityData }, AdminNewsItemsCreateEditComponent, this.updateNewsItem.bind(this), universityData.id);
    }

    handleCreateNewsItem() {
        this.openDialog({ label: "Създай новина" }, AdminNewsItemsCreateEditComponent, this.createNewsItem.bind(this))
    }

    handleDeleteNewsItem(newsItem: INewsItem) {
        const data: IConfirmationDialogData = {
            message: `Сигурни ли сте, че искате да изтриете <b class="whitespace-nowrap">${newsItem.title}</b> от списъка.`,
            buttonColor: "warn"
        }
        this.openDialog(data, ConfirmComponent, this.deleteContact.bind(this, newsItem));
    }

    private fetchData() {
        this.rootService.newsItems.getAll().pipe(
            first()
        ).subscribe({
            next: (resp: INewsItem[]) => {
                this.newsItems = resp;
                this.loading = false;
            },
            error: error => this.errorHandler.handleError(error)
        })
    }

    private createNewsItem(newsItem: INewsItem) {
        this.rootService.newsItems.create(newsItem).pipe(
            first()
        ).subscribe({
            next: (resp: INewsItem) => {
                this.updateTable(resp, UpdateDataTableMehtods.Add);
            },
            error: error => this.errorHandler.handleError(error)
        });
    }

    private updateNewsItem(newsItem: INewsItem, updateNewsItemId: number) {
        this.rootService.newsItems.update(newsItem, updateNewsItemId).pipe(
            first()
        ).subscribe({
            next: (resp: INewsItem) => {
                this.updateTable(resp, UpdateDataTableMehtods.Update);
            },
            error: error => this.errorHandler.handleError(error)
        });
    }

    private deleteContact(newsItem: INewsItem) {
        this.rootService.universities.delete(newsItem.id).pipe(
            first()
        ).subscribe(resp => {
            const removeNnewsItem = this.newsItems.find(i => i.id === resp.id);

            if (removeNnewsItem) {
                this.update$.next({ item: removeNnewsItem, method: UpdateDataTableMehtods.Delete });
            }
        });
    }

    private updateTable(data: INewsItem, method: UpdateDataTableMehtods) {
        this.update$.next({ item: data, method });
        this.alertService.showMessage("Промените са запазени");
    }
}
