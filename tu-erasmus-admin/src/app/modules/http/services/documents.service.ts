// import { Injectable } from '@angular/core';
// import { Observable } from "rxjs";
// import { NEWS_ITEMS_API } from '../../../shared/constants/constants';
// import { IDocument } from '../../../shared/models/db-models';
// import { ApiService } from '../api.service';

// @Injectable({
//     providedIn: 'root'
// })
// export class DocumentsService extends ApiService {

//     getAll(): Observable<IDocument[]> {
//         return this.getInternal<IDocument[]>(NEWS_ITEMS_API);
//     }

//     create(newsItem: IDocument): Observable<IDocument> {
//         return this.postInternal<IDocument>(NEWS_ITEMS_API, this.getBodyObject(newsItem));
//     }

//     delete(newsItemId: number | undefined) {
//         return this.deleteInternal<IDocument>(`${NEWS_ITEMS_API}/${newsItemId}`);
//     }

//     update(newsItem: IDocument, updatenewsItemId: number): Observable<IDocument> {
//         return this.putInternal<IDocument>(`${NEWS_ITEMS_API}/${updatenewsItemId}`, this.getBodyObject(newsItem));
//     }

//     private getBodyObject(newsItem: IDocument) {
//         return {
//             title: newsItem.title,
//             body: newsItem.body,
//             hide: newsItem.hide
//         }
//     }
// }
