import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { API } from '../../../shared/constants/constants';
import { IDocument } from '../../../shared/models/db-models';
import { ApiService } from '../api.service';

@Injectable({
    providedIn: 'root'
})
export class DocumentsService extends ApiService {

    getAll(): Observable<IDocument[]> {
        return this.getInternal<IDocument[]>(API.UPLOAD_FILES);
    }

    create(document: IDocument): Observable<IDocument[]> {
        return this.postInternal<IDocument[]>(API.UPLOAD, document);
    }

    delete(documentId: number | undefined) {
        return this.deleteInternal<IDocument>(`${API.UPLOAD_FILES}/${documentId}`);
    }
}
